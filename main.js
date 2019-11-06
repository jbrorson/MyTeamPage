// LOGINFORMULÄR
//1
// var email = document.getElementById("username");

// username.addEventListener("input", function (event) {
//   if (username.validity.typeMismatch) {
//     username.setCustomValidity("I expect an e-mail, darling!");
//   } else {
//     username.setCustomValidity("");
//   }
// });
//2
// var form  = document.getElementsByTagName('form')[0];
// var email = document.getElementById('mail');
// var error = document.querySelector('.error');

// email.addEventListener("input", function (event) {
//     if (email.validity.valid) {
//         error.innerHTML = "";
//         error.className = "error";
//     }
// }, false);
// form.addEventListener("submit", function (event) {
//     if (!email.validity.valid) {
//         error.innerHTML = "I expect an e-mail, darling!";
//         error.className = "error active";
//         event.preventDefault();
//     }
//   }, false);

  $('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
 });