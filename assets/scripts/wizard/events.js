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

// const onShowProjects = function () {
//   $('#index').css('display');
// };

const onGetProjects = function (data) {
  event.preventDefault();
  api.getProjects(data)
    .done(ui.getProjectsSuccess)
    .fail(ui.failure);
  // onShowProjects();
  // onNewProject();
};

// const onShowProject = function (event) {
//   event.preventDefault();
//   let data = getFormFields(event.target);
//   api.showThought(data)
//     .done(ui.success)
//     .fail(ui.failure);
// };

const addHandlers = () => {
	$('#addnewtitle').on('submit', onNewProject);
  $('#get-projects').on('submit', onGetProjects);
  // $('#show-project').on('submit', onShowProject);


};

module.exports = {
  addHandlers,
  // SaveNewProject,
};
