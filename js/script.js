const quiz =[
  {
    'question':'Find the answers and claim 🎁',
    'answer': '',
    'image': ''
  },
  {
  'question':'This place above the clouds is build on a foundation of ____ , one of the marvels of the world.',
  'answer':'Plaustrite',
  'image': 'https://lh3.googleusercontent.com/hZsOhUuxl4ke4QQHSJgp2mIWa0jTeP51z2XWab5_tQt5ZFHMvT8igCyyJZh7kx9rl5-RQb9-LceVAyZKhqUBBm0gtklA12CYurVR1bOP01WVjOwXQW92sVbIGrfI7WdlhNjV_a8CYo8uXsvzJsRTA_i4ejbFCJqFRP3Nmq0m2q0n4P5zjvW4-73ayLu3xbh2dBbx9YD1Vs3Hzcto_B5IbrHGtrsrQxPyXpTEVxPx-E9RgkQaWO4V8Aw10uxqwsI9C-vmvVOGFBnC2ttbIkPdNSrU8ciuvFh0r0bmon-cK4u1sE_ZvDSqUBJe7lo7lv5VbIIt81TTTzsSpWMhSVFuDFi-u1ya5Xb1MVWSROTq80rVJeZGoAaHyBEEhhw1m2cnJENslvrg_U8sMbfo_iAAWokFNfPdBO2RBUfKIth_bjQ0E6c1jq4wQJc4gXl-7erdL3LktQEW-oXYX3wvy4xcJ3c-c3rXkQbGbaXg2k9WvO7m-wA8UC_EbcbuLL1_emRezHg8DUO9EWOMJAL5xbQw-GU_4D-_47M81bUFASbt-T6koRlc5xnHkoaQdjHKqasGETnnpjXdB0_sKoAPJMRjg65r1nyAMu0RULvCU3C4HPj4z8fq1aDxMvqBCAySvaYW8OHYYIKSdFczoaeC8l3tOcXcC2rL1-TDI5yj7cTYioDa3m0FLV_qSj1P70bynO7fXuYDoUlVhjCZDDnJ7rgDAune=w2532-h1170-no?authuser=0'
},{
  'question':'Find the clue IRL',
  'answer':'Bicycle',
  'image': 'https://www.awesomeinventions.com/wp-content/uploads/2015/10/sushi-cats.jpg'
},
{
  'question':'Find the clue IRL',
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

        if(i===4){
          $("input, img").hide();
          $('button').text('Claim');
          $('h1').css('font-size','6em');
        }
        else{
          $('h1').css('font-size','4em');
          $("input, img").show();
          $('button').text('Submit');
        }
      }

  });
});
