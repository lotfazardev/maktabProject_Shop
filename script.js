$(document).ready(function(){
    $(":button").click(function(){
        $("#leftBody").css({backgroundColor: $(this).attr('value')});
    });
});