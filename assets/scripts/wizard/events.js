'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');

// const showWelcomeMessage = function () {
//   $('.welcome-message').css('display', 'block');
// };
//
// const onHomeButton = () => {
//   $('.home-button').html(showWelcomeMessage());
//   console.log();
//   // showWelcomeMessage();
//
// };

const onHomeButton = function () {
  document.getElementById("welcome-message").style.display="block";
  // document.getElementById(welcome-message).style.visibility = '';
};

const onNewProject = function (event) {
  event.preventDefault();
	let data = getFormFields(event.target);
  api.newProject(data)
	  .done(ui.newProjectSuccess)
	  .fail(ui.failure);
};

const onGetProjects = function (data) {
  event.preventDefault();
  api.getProjects(data)
    .done(ui.getProjectsSuccess)
    .fail(ui.failure);
};

const onShowProject = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.showProject(data)
    .done(ui.success)
    .fail(ui.failure);
};

$('#hide-projects').click(function(){
   $('.title-display').toggleClass('hidden');
});

const updateId =  function (event){
  event.preventDefault();
  let id = $(event.target).attr("data-project-id");
  $(".update-project-button").attr("data-project-id", id);
};

const onUpdateProject = function (event) {
  event.preventDefault();
  let id = $(".update-project-button").attr("data-project-id");
  let data = getFormFields(event.target);
  api.updateProject(data, id)
    .done( function(){
      ui.updateProjectSuccess();
      onGetProjects(event);
    })
    .fail(ui.failure);
  // api.getProjects()
  //   .done(ui.getProjectsSuccess)
  //   .fail(ui.failure);
};

const deleteId =  function (event){
  event.preventDefault();
  let id = $(event.target).attr("data-project-id");
  $(".delete-project-button").attr("data-project-id", id);
};

const onDeleteProject = function (event) {
  event.preventDefault();
  let id = $(this).attr("data-project-id");
  api.deleteProject(id)
    .done(ui.success)
    .fail(ui.failure);
  api.getProjects()
    .done(ui.getProjectsSuccess)
    .fail(ui.failure);
};


$("#actionbtnsuserstories").click(function () {
  $("#addustemplate").append('<div class = "notebook"> As a <input type="text" placeholder="role">, I want to <input type="text" placeholder="action">,so that/because <input type="text" placeholder="goal">.</div>');
});

// conditional ^


// const onShowUserStories = function (event) {
//   event.preventDefault();
//   let data = getFormFields(event.target);
//   api.showUserStories(data)
//     .done(ui.success)
//     .fail(ui.failure);
// };

const onShowUserStories = function(){
  api.showUserStories()
    .done(ui.showUserStoriesSuccess)
    .fail(ui.failure);
};

const onCreateUserStory = function (event) {
  event.preventDefault();
	let data = getFormFields(event.target);
  api.newProject(data)
	  .done(ui.createUserStorySuccess)
	  .fail(ui.failure);
};

const addHandlers = () => {
	$('#addnewtitle').on('submit', onNewProject);
  $('#get-projects').on('submit', onGetProjects);
  $('#show-project').on('submit', onShowProject);
  $('.title-display').on('click','.update-project',updateId);
  $('#updateProjectModal').on('submit', onUpdateProject);
  $('.title-display').on('click','.delete-project',deleteId);
  $('#delete-project-button').on('click', onDeleteProject);
  $('#showusbtn').on('submit', onShowUserStories);
  $('#createnewstory').on('submit', onCreateUserStory);
  $('.homebutton').on('click', onHomeButton);

};

module.exports = {
  addHandlers,
};
