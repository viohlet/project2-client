'use strict';

const app = require('../app');


// const showOtherButtons = function (){
//   // $('.cambiopass').css('display', 'block');
//   $('.byescreen').css('display', 'block');
// };
//
// const hideLogInsButton = function () {
//   $('.hiscreen').css('display', 'none');
//   // $('#loginbutton').css('display', 'none');
//   // $('#signupbutton').css('display', 'none');
// };

const hideWelcomeMessage = function () {
  $('#welcome-message').css('display', 'none');
};

const showWorkingArea = function () {
  $('.workingcontent').css('display', 'block');
};

const hideWorkingArea = function () {
  $('.workingcontent').css('display', 'none');
};

const signUpSuccess = (data) => {
  app.user = data.user;
  document.getElementById("message").innerHTML = 'Registration complete. Please Log-In';
  $('#message').fadeIn('fast').delay(5000).fadeOut('fast');
  console.log(data);
};

const signInSuccess = (data) => {
  app.user = data.user;
  document.getElementById("message").innerHTML = 'Log-in successful';
  $('#message').fadeIn('fast').delay(3000).fadeOut('fast');
  // showOtherButtons();
  // hideLogInsButton();
  showWorkingArea();
  hideWelcomeMessage();
};

// const showLogInButtons = function (){
//   $('.hiscreen').css('display', 'block');
//   // $('#loginbutton').css('display', 'block');
//   // $('#signupbutton').css('display', 'block');
// };
//
// const hideOtherButtons = function (){
//   $('.byescreen').css('display', 'none');
// };


const signOutSuccess = () =>{
  delete app.user;
  // console.log(app);
  $('.app').css("display", "none");
  // showLogInButtons();
  // hideOtherButtons();
  hideWorkingArea();
};

const changePasswordSuccess = () => {
  // app.user = data.user;
  document.getElementById("message").innerHTML = 'Password successfully changed';
  $('#message').fadeIn('fast').delay(3000).fadeOut('fast');
  console.log(app);
};

const success = (data) => {
  if(data){
  console.log(data);
  }
};

const failure = (error) => {
  console.error(error);
};


module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  signUpSuccess,
};
