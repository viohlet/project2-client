# project2-client

User Stories Wizard

The purpose of this app is to make the web development process easier. Even though
I am old-school and loyal to my pen and paper, I find myself losing my user stories
all the time in the early stages or brainstorming process. With an app like this one,
fellow developers can have all their projects and user stories in one place. Thanks
for visiting my app!

- Access my app: https://viohlet.github.io/project2-client/

- Wireframe: http://imgur.com/a/nmENS

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
    - As a user, I want to update user stories of a project.
    - As a user, I want to delete user stories of a project.
    - As a user, I want to log-out because I want to finish my session.

- Planning:

    - The process started with a wireframe of the app.

    - Important to establish the one to many relationship.

    - Installed the templates and created GitHub repositories for the client and api sides.

    - Some vague and basic html,css and bootstrap was used.

    - Later, moved into back-end and starting scaffolding and making sure my relationships were being communicated. Then moved to migrations to set those and then to the controllers to check if my four actions' scaffolds had no duplicates. Equally important was to review the schema to make sure I was passing the right params. Then I made curl request for each CRUD action and table.

    - After that, authentication via tokens was implemented in the controller and checked with curl requests for the CRUD actions for each table.

    - Then, it was time to move to the front end and work on layout, JavaScript and Ajax.

    - Recently, I updated the whole look of my app (I could not stand how it looked before this). More minimalistic and in dark tones for late night vision comfort :p


- Unsolved Problems:

    - User Stories Table: My whole user stories table works on the back end but not in front-end. Most pressing issue for me at the moment.
    - I am interested in working on a export tool to Email, Evernote, Dropbox, and other useful tool for easy sharing.

- Some Screenshots of my app's before and after look:

    - Old Look of my page (When meeting requirements was all that mattered)
![Imgur](http://i.imgur.com/JopXjv2.png)

    - Makeover
![Imgur](http://i.imgur.com/xvCZte1.png)
