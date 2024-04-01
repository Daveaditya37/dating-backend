// MatchPage.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MatchPage = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    // Fetch matches from backend when component mounts
    const fetchMatches = async () => {
      try {
        const response = await axios.get('/api/matches');
        setMatches(response.data);
      } catch (error) {
        console.error('Failed to fetch matches:', error);
      }
    };

    fetchMatches();
  }, []);

  return (
    <div>
      <h2>Matches</h2>
      {matches.length > 0 ? (
        <ul>
          {matches.map(match => (
            <li key={match.id}>{match.name}</li>
          ))}
        </ul>
      ) : (
        <p>No matches found</p>
      )}
    </div>
  );
};

export default MatchPage;
