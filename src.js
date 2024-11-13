document.addEventListener('DOMContentLoaded', () => {
    // Toggle Like Button
    const likeButtons = document.querySelectorAll('.post__option span.material-icons');

    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const isLiked = button.textContent === 'thumb_up';

            if (isLiked) {
                button.textContent = 'thumb_up_off_alt'; // Change to 'Unlike' icon
            } else {
                button.textContent = 'thumb_up'; // Change to 'Like' icon
            }
        });
    });

    // Submit Messages
    const messageSenderForm = document.querySelector('.messageSender form');
    const messageInput = document.querySelector('.messageSender__input');

    messageSenderForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const messageText = messageInput.value.trim();
        if (messageText) {
            const newPost = document.createElement('div');
            newPost.className = 'post';
            newPost.innerHTML = `
                <div class="post__top">
                    <img class="user__avatar post__avatar"
                        src="https://image.freepik.com/free-vector/businessman-avatar-cartoon-character-profile_18591-50584.jpg"
                        alt="" />
                    <div class="post__topInfo">
                        <h3>Somanath Goudar</h3>
                        <p>Just now</p>
                    </div>
                </div>
                <div class="post__bottom">
                    <p>${messageText}</p>
                </div>
                <div class="post__options">
                    <div class="post__option">
                        <span class="material-icons"> thumb_up </span>
                        <p>Like</p>
                    </div>
                    <div class="post__option">
                        <span class="material-icons"> chat_bubble_outline </span>
                        <p>Comment</p>
                    </div>
                    <div class="post__option">
                        <span class="material-icons"> near_me </span>
                        <p>Share</p>
                    </div>
                </div>
            `;

            document.querySelector('.feed').prepend(newPost);
            messageInput.value = ''; // Clear input after submission
        }
    });
});
