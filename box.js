$(document).ready(function() {
    for (let i = 0; i < 15; i++) {
        $("#grid-container .box:first").clone().appendTo("#grid-container");
    }

    $("#grid-container .box").on("click", function() {
        $(this).toggleClass("gray");
    });
});