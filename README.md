# project2-client

User Stories Wizard

- Access my app https://viohlet.github.io/project2-client/

- Original wireframe: http://imgur.com/a/lmmNh

- New wireframe suggested by Jeff: http://imgur.com/a/nmENS

- Original ERD: http://imgur.com/a/NwZRW

- Technologies used:

    - Ajax
    - Bootstrap
    - JQuery
    - JavaScript
    - CSS
    - HTML
    - Rails
    - Handlebars

- My user stories:

    - As a user, I want to register because I want to use this site.
    - As a user, I want to sign-in because I want to access this site and my profile.
    - As a user, I want to get all my projects.
    - As a user, I want to create projects.
    - As a user, I want to update projects.
    - As a user, I want to delete projects and all the user stores in it.
    - As a user, I want to get the user stories from a project.
    - As a user, I want to create user stories for a project.
    - As a user, I want to update user stories for a project.


    - As a user, I want to delete user stories for a project.

    - As a user, I want to log-out because I want to finish my session.

- Planning:

The process started with a wireframe of the app.

Important to establish the one to many relationship.

Installed the templates and created GitHub repositories for the client and api sides.

Some vague and basic html,css and bootstrap was used.

Later, moved into back-end and starting scaffolding and making sure my relationships were being communicated. Then moved to migrations to set those and then to the controllers to check if my four actions' scaffolds had no duplicates. Equally important was to review the schema to make sure I was passing the right params. Then I made curl request for each CRUD action and table.

After that, authentication via tokens was implemented in the controller and checked with curl requests for the CRUD actions for each table.

Then, it was time to move to the front end and work on layout, JavaScript and Ajax.

I completed my back end api, which is functional for all my tables. However, on the front end, I only got to work on the projects table and all CRUD actions required work. Planning to continue my tasks for the user stories table.

- Unsolved Problems:

My original idea to have this be a wizard/spells theme and so every time a user story a "spell would come up. A wizard asking if naming is right... Also my whole user stories table works on back end but not in front-end. Most pressing issue for me.
