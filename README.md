# queue 

queue is an algorithm submission system built for students taking WDI.

## Technologies Used 

The project structure for this application was based of the [TypeScript Node Starter](https://github.com/Microsoft/TypeScript-Node-Starter#typescript-node-starter) code and [Mega Boilerplate](http://megaboilerplate.com/).

The technologies used are: 

* Node (v8.9.1)
* npm (v5.6.0)
* Express.js 
* MongoDB (and [Mongoose](http://mongoosejs.com/docs/schematypes.html))
* Pug
* [CodeMirror](http://codemirror.net/doc/manual.html)

## How to Run This Locally

To run this locally you must clone the repository and install dependencies. 

Then, you must build using this command: 

```bash 
$ npm start
```

To see a list of all npm scripts install the `ls-scripts` package globally and run this command: 

```bash 
$ ls-scripts
```

## How To Interact With Database Locally 

To interact with the database locally navigate to the root directory of the project. Then start the Node REPL.

```bash 
$ node 
```

In the Node REPL first load the environment variables (located in the `.env` file).

```js
> require('dotenv').config()
```

Next, connect to MongoDB.

```js
> require("./config/database")
```

## Testing 

* All challenges must have 10 tests associated with them 
* Tests must be complete
    - All possible input types 
* All functions will tested by *at most* 12 tests

## Development Credentials 

The credentials of a test user: 

* Name: Jane Doe 
* Password: password1
* Email: email@email.org
* GitHub URL: https://github.com/jtamsut
* Cohort: WDI-DT-57

## Developer Notes

**MVP DUE DATE: February 20th**

**To Do for MVP**:

- [ ] Seed database with 10 realistic challenges and tests
    * Need to handle code that has syntax errors. What's the best way to do this? `try-catch`? Can you send back user an error message?
    * How are we going to tell the user *what* tests they failed?
- [ ] Challenge view 
     * User should see: 
        - prompt 
        - difficulty of challenge
        - examples of function being used 
- [ ] Use Webpack to bundle build (minified and uglified) versions of assets
- [ ] Purchase production accounts for mLabs and Heroku
- [ ] User login/logout 
    * Authenticate/authorize and safely store passwords 
    * Email password recovery and account confirmation
- [ ] Clean up CodeMirror integration 
    * Use webpack to bundle all assets
- [ ] Clean up views 
- [ ] Allow students to filter: 
    * By completed 
    * By difficulty
- [ ] Display incorrect questions 
- [ ] Create admin dashboard to add problems and tests

**Other To Dos**: 

- [ ] Make admin dashboard 
    * Instructor should be able to create & save challenges using UI
        - Write prompt, assign difficulty and write starter code 
- [ ] Have the ability to group challenges into assignments
- [ ] Have the ability to assign multiple choice quizzes to students
- [ ] Use Docker to set up virtual environments to test code in other languages/using other frameworks
- [ ] Show test cases to client

## Research

* https://en.wikipedia.org/wiki/Connection_pool
* http://odino.org/eval-no-more-understanding-vm-vm2-nodejs/

## Style 

* Use single-quotes(`''`) and back-ticks for strings
* Only use arrow functions for one-liners and when you want to preserve lexical scope. Use function declarations whenever possible.

<!-- 

Store session in DB -> sessions collections
 -->