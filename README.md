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

## Developer Notes

TODO: 

* Integrate Monaco text editor: https://www.npmjs.com/package/monaco-editor
* Data model 
* Wireframes
* User auth 
* Email 
* User submitted code 
* Test code 
* Add content
* QA