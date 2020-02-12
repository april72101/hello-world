/*jslint devel: true, browser: true */

(function () {
    "use strict";
    var new_column1 ="<p>Hello</p>";
    new_column1 += "<p>Open your eyes</p>";
    new_column1 += "<p>Do you see it?</p>";
    new_column1 += "<p>the destruction,</p>";
    new_column1 += "<p>the only way</p>";
    new_column1 += "<p>To move forward</p>";
    new_column1 += "<p>To acknowledge</p>";
    new_column1 += "<p>Darkness is</p>";
    new_column1 += "<p>in everybody,</p>";
    new_column1 += "<p>You need to</p>";
    new_column1 += "<p>embrace it;</p>";
    new_column1 += "<p>in your soul</p>";
    var new_column2 = "<p>World</p>";
    new_column2 += "<p>wide, there is beauty.</p>";
    new_column2 += "<p>All we ever see is</p>";
    new_column2 += "<p>the pain. Is this</p>";
    new_column2 += "<p>to bring peace?</p>";
    new_column2 += "<p>in this broken world?</p>";
    new_column2 += "<p>we are broken;</p>";
    new_column2 += "<p>in our souls,</p>";
    new_column2 += "<p>but that is okay.</p>";
    new_column2 += "<p>acknowledge and</p>";
    new_column2 += "<p>change the course</p>";
    new_column2 += "<p>towards goodness.</p>";
    var old_column1 = "";
    var old_column2 = "";

    function pageToggle() {

        old_column1 = document.getElementById("hello-world-column1").innerHTML;

        document.getElementById("hello-world-column1").innerHTML = new_column1;

        old_column2 = document.getElementById("hello-world-column2").innerHTML;

        document.getElementById("hello-world-column2").innerHTML = new_column2;
        new_column1 = old_column1;
        new_column2 = old_column2;
    }
    document.body.addEventListener("click", pageToggle);

}());
