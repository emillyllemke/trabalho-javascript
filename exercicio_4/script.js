document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
    const commentsList = document.getElementById('comments-list');

    const colors = ['#b5c1fd', '#ffd0f0', '#d9ffd0', '#FFDAB9 '];
    let colorIndex = 0;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

       const commentText = commentInput.value.trim();
        if (commentText) {
            addComment(commentText);
            commentInput.value = ''; 
        }
    });

    function addComment(text) {
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment user-comment';
        commentDiv.textContent = text;
        commentDiv.style.backgroundColor = colors[colorIndex]

        commentsList.appendChild(commentDiv);
        commentsList.scrollTop = commentsList.scrollHeight; 

        colorIndex = (colorIndex + 1) % colors.length;
    }
});
