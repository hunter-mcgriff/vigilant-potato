// Script for News Updates Checkbox
function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
    // Get the output text

    console.log(checkBox.checked);

    var text = document.getElementById("text");
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

$(function() {
    $('#console-box').append('console is ready...');

    $('li').click(function() {
        $('#console-box').append('<br>class:' + $(this).attr("class") + '|value:' + $(this).text() + '.');
        $(this).toggleClass('selected').siblings().removeClass('selected');;
    });

});