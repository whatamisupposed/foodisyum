$(document).ready(function() {
    function addComment(displayName, commentText) {
        const comment = `<div class="comment">
                            <img class="avatar" src="anonymous.png" alt="${displayName} Avatar">
                            <div class="comment-content">
                                <span class="display-name">${displayName}:</span>
                                <p class="comment-text">${commentText}</p>
                            </div>
                            <div class="comment-buttons">
                                <button class="edit-comment">Edit</button>
                                <button class="delete-comment">Delete</button>
                            </div>
                         </div>`;
        $("#comments-container").append(comment);
    }

    $("#comments-container").on("click", ".edit-comment", function() {
        const comment = $(this).closest(".comment");
        comment.find(".comment-content").hide();
        comment.find(".comment-buttons").hide();
        comment.find(".edit-display-name").show().val(comment.find(".display-name").text());
        comment.find(".edit-comment-text").show().val(comment.find(".comment-text").text());
        comment.find(".save-edit").show();
    });

    $("#comments-container").on("click", ".save-edit", function() {
        const comment = $(this).closest(".comment");
        const editedDisplayName = comment.find(".edit-display-name").val();
        const editedCommentText = comment.find(".edit-comment-text").val();

        comment.find(".display-name").text(editedDisplayName);
        comment.find(".comment-text").text(editedCommentText);

        comment.find(".comment-content").show();
        comment.find(".comment-buttons").show();
        comment.find(".edit-display-name").hide();
        comment.find(".edit-comment-text").hide();
        comment.find(".save-edit").hide();
    });
    $("#post-comment").click(function() {
        const displayName = $("#display-name").val();
        const commentText = $("#comment-text").val();
        if (displayName && commentText) {
            addComment(displayName, commentText);
            $("#display-name").val("");
            $("#comment-text").val("");
        }
    });

    $("#comments-container").on("click", ".edit-comment", function() {
    });

    $("#comments-container").on("click", ".delete-comment", function() {
        $(this).closest(".comment").remove();
    });
});
