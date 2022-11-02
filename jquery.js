//Part 1, Question 1

console.log("Let's get ready to party with jQuery!")

//Part 1, Question 2

$('article').children('img').addClass('image-center')

//Part 1, Question 3

const $parFinal = $('p').eq(5);
$parFinal.remove()

//Part 1, Question 4

$('h1').css('font-size', Math.random()*100)

//know this is incorrect.

//Part 1, Question 5

$('ol').append('<li>I love Odd numbers, especially on lists</li>')

//Part 1, Question 6

$('aside')
    .empty()
    .append($("<p>", {text: "Sorry about that list :("}))

//Part 1, Question 7 

// $('body').css('background-color', input.value, input.value)

$(".form-control").on('keyup blur change', function(){
    let red = $(".form-control").eq(0).val();
    let green = $(".form-control").eq(1).val();
    let blue = $(".form-control").eq(2).val();
    $("body").css("background-color",
    "rgb(" + red + "," + green + "," + blue + ")");
})
//Part 1, Question 8

$('img').on('click', function(e){
    // $(this).remove();  //Why wouldn't this move?
    $(e.target).remove();
})