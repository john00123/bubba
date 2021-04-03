const quiz =[
  {
    'question':'Find the answers and claim 🎁',
    'answer': '',
    'image': ''
  },
  {
  'question':'This place above the clouds is build on a foundation of ____ , one of the marvels of the world.',
  'answer':'Plaustrite',
  'image': 'https://github.com/john00123/bubba/blob/092229ca90ef7f8697168a0f791b206b0daecfd1/img/venti.PNG'
},{
  'question':'Find the clue IRL',
  'answer':'Bicycle',
  'image': 'https://www.awesomeinventions.com/wp-content/uploads/2015/10/sushi-cats.jpg'
},
{
  'question':'Find the clue inside the apartment',
  'answer':'H92kw0',
  'image': 'https://images-na.ssl-images-amazon.com/images/I/81%2BFG%2BxmUTL._AC_SL1500_.jpg'
},
{
  'question':'Congratulations claim your first price',
  'answer':'',
  'image': ''
},
{
  'question':'You got the Unicorn character, check underneath the desk .... What was his name?',
  'answer':'Julian',
  'image': 'https://crossingstation.com/wp-content/uploads/Banner-Animal-Crossing-Pocket-Camp-Julians-Stardust-Cookie.png'
},
{
  'question':'Find the first name of the actor that played this character',
  'answer':'Carlos',
  'image': 'https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/share_link_image_large/public/screenshots/csm-tv/power-rangers-wild-force-ss3-min.jpg'
},
{
  'question':'Find the clue inside the apartment',
  'answer':'2.08990511144',
  'image': 'https://cdn11.bigcommerce.com/s-f7yrwu2fgw/products/14596/images/34053/IMG_1922__22671.1530062320.500.750.JPG'
},
{
  'question':'Congratulations you finished the quiz. Claim your last price',
  'answer':'',
  'image': ''
},
{
  'question':'You have completed all the questions, and gotten Nasus new skin !!!Congratulations!! - Text John "peeking through the bushes" to recieve the price.',
  'answer':'',
  'image': 'https://github.com/john00123/bubba/blob/092229ca90ef7f8697168a0f791b206b0daecfd1/img/nasus.png'
},


]


// function correct(i){
//   let x = i
//   $('h1').text(quiz[`${x}`].question)
// }


let i = 0;


$(document).ready(function() {

  $('.question').text(quiz[0].question);
  $('#submit').click(function() {

      console.log(i);

      let id1 = $('#id1').val();

      if (quiz[i].answer.toLowerCase() !== id1.toLowerCase()) {
          alert('Nope, Sorry Baby try again');
          console.log(quiz[i].answer)
      }
      else
      {
        i = i+1;
        alert('Correct!!!! 🎊');
        $('.question').text(quiz[`${i}`].question);

        $('img').attr('src', `${quiz[i].image}`);
        console.log(i);
        $('input').val('');

        if(i==4){
          $("input, img").hide();
          $('button').text('Claim');
          $('h1').css('font-size','6em');
        } else if (i==8) {
          $("input, img").hide();
          $('button').text('Claim');
          $('h1').css('font-size','6em');
        } else if (i==9) {
          $('button').hide();
          $('h1').css('font-size','6em');
          $("img").show();
        }
        else{
          $('h1').css('font-size','4em');
          $("input, img").show();
          $('button').text('Submit');
        }
      }

  });
});
