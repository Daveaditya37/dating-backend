const photoContainer = document.querySelector('.photo-container');
let initialX = null;

photoContainer.addEventListener('mousedown', handleTouchStart);
photoContainer.addEventListener('touchstart', handleTouchStart);

photoContainer.addEventListener('mouseup', handleTouchEnd);
photoContainer.addEventListener('touchend', handleTouchEnd);

function handleTouchStart(event) {
    if (event.touches) {
        initialX = event.touches[0].clientX;
    } else {
        initialX = event.clientX;
    }
}

function handleTouchEnd(event) {
    if (initialX === null) {
        return;
    }

    let finalX = null;

    if (event.changedTouches) {
        finalX = event.changedTouches[0].clientX;
    } else {
        finalX = event.clientX;
    }

    let deltaX = finalX - initialX;

    if (deltaX > 50) {
        console.log('Swiped right');
        // Handle swipe right action (like)
    } else if (deltaX < -50) {
        console.log('Swiped left');
        // Handle swipe left action (dislike)
    }

    initialX = null;
}
