$(document).ready(function () {
    $("#parameter").click(function () {
        $("#parameterpanel").slideToggle("slow");
    });
    $("#units").click(function () {
        $("#unitspanel").slideToggle("slow");
    });
    $("#trends").click(function () {
        $("#trendspanel").slideToggle("slow");
    });
    $("#alarm").click(function () {
        $("#alarmpanel").slideToggle("slow");
    });
});