$("#sm-form-email").attr("placeholder", "Podaj swój adres e-mail i odbierz kod rabatowy...");

var h1 = $(".dx-site1").height();
h1 = h1+"px";
$(h1).toString();
var h2 = $(".dx-site2").height();
h2 = h2+"px";

$(".dx-box").click(function(){

    var bonus = $(this).next().html();
    var imgSrc = $(this).children('img').attr('src');

    $('#selected').text(bonus);
    $('#selected').next().children('img').attr('src', imgSrc);

    $('sm-form-bonus').val(bonus);

    $(".dx-site1").fadeOut('slow', function(){
        $(".dx-site2").fadeIn('slow');
    });

});

 $("#back").click(function(){
     $(".dx-site2").fadeOut('slow', function(){
        $(".dx-site1").fadeIn('slow');
    });
 });