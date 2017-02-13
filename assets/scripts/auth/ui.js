'use strict';

const app = require('../app');


const hideWelcomeMessage = function () {
  $('#welcome-message').css('display', 'none');
};

const showWorkingArea = function () {
  $('#workingcontent').css('display', 'block');
};

const hideWorkingArea = function () {
  $('#workingcontent').css('display', 'none');
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
  $('.enter-required-auth').css('display', 'none');
  $('.homebutton').css('display', 'block');
  $('.myprojectsbutton').css('display', 'block');
  $('.change-pass-auth').css('display', 'block');
  $('#sign-out').css('display', 'block');
  showWorkingArea();
  hideWelcomeMessage();
};

const signOutSuccess = () =>{
  delete app.user;
  // console.log(app);
  $('.app').css("display", "none");
  $('.enter-required-auth').css('display', 'block');
  $('.homebutton').css('display', 'none');
  $('.myprojectsbutton').css('display', 'none');
  $('.change-pass-auth').css('display', 'none');
  $('#sign-out').css('display', 'none');
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
