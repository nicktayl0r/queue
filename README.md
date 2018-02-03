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

## Developer Notes

TODO: 

Next steps: 

* Implement challenge views and controllers 
    - Create a table to list all challenges 
    - Create a page so users can submit challenges 
        -> prompt (Written and stored in markdown and converted to HTML)
        -> text editor 
        -> submit button 
* How do we store tests? What library are we using to do tests?
* How do we execute tests safely on the server?
* Research Jest for testing


* Need a better way to integrate CodeMirror into views (using AMD module loading)

* Data model 
* Wireframes
* User auth 
* Email 
* User submitted code 
* Test code 
* Add content
* QA on Heroku (already set up staging environment)
* Use Gulp to bundle a build version of assets

### Research 
* https://en.wikipedia.org/wiki/Connection_pool
* http://odino.org/eval-no-more-understanding-vm-vm2-nodejs/
