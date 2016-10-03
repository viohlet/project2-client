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

// const onIndexProjects = function (event) {
//   event.preventDefault();
//   api.indexProjects()
//     .done(ui.onIndexProjectsSuccess)
//     .fail(ui.failure);
// };

const addHandlers = () => {
  // $('.tile').on('click', onClickTile);
	$('#addnewtitle').on('submit', onNewProject);
	// $('#getGameById').on('submit', onGetGameById);
  // $('#index-projects').on('submit', onIndexProjects);
	// $('.new-project').on('click', onNewProject);

};

module.exports = {
  addHandlers,
  // SaveNewProject,
};
