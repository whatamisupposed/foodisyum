$(document).ready(function() {
    $('#comment-form').submit(function(event) {
        event.preventDefault();
        const displayName = $('#display-name').val();
        const commentText = $('#comment-text').val();
        if (displayName && commentText) {
            const comment = `
                <div class="comment">
                    <span class="user">${displayName}:</span>
                    <span class="text">${commentText}</span>
                    <button class="edit-btn">Edit</button>
                    <button class="delete-btn">Delete</button>
                </div>
            `;
            $('.comments').prepend(comment); 
            $('#comment-form')[0].reset(); 
        }
    });

    $('.comments').on('click', '.delete-btn', function() {
        $(this).closest('.comment').remove();
    });

});