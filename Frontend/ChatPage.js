import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ChatPage = () => {
  const { userId } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMessages = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`/api/chat/messages/${userId}`);
        setMessages(response.data);
      } catch (error) {
        console.error('Failed to fetch messages:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [userId]);

  const sendMessage = async () => {
    try {
      const response = await axios.post(`/api/chat/messages/${userId}`, { message: newMessage });
      const newMessageData = response.data;
      setMessages(prevMessages => [...prevMessages, newMessageData]);
      setNewMessage('');
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };

  return (
      <div>
        <h2>Chat</h2>
        {loading ? (
            <p>Loading messages...</p>
        ) : (
            <ul>
              {messages.map(message => (
                  <li key={message.id}>{message.text}</li>
              ))}
            </ul>
        )}
        <input type="text" value={newMessage} onChange={e => setNewMessage(e.target.value)} />
        <button onClick={sendMessage}>Send</button>
      </div>
  );
};

export default ChatPage;

