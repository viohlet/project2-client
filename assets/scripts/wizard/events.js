'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');


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
  api.showThought(data)
    .done(ui.success)
    .fail(ui.failure);
};

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
    .done(ui.updateProjectSuccess)
    .fail(ui.failure);
  api.getProjects()
    .done(ui.getProjectsSuccess)
    .fail(ui.failure);
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

const addHandlers = () => {
	$('#addnewtitle').on('submit', onNewProject);
  $('#get-projects').on('submit', onGetProjects);
  $('#show-project').on('submit', onShowProject);
  $('.title-display').on('click','.update-project',updateId);
  $('#updateProjectModal').on('submit', onUpdateProject);
  $('.title-display').on('click','.delete-project',deleteId);
  $('#delete-project-button').on('click', onDeleteProject);


};

module.exports = {
  addHandlers,
};
