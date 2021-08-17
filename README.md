# ToViewList | MERN

A simple MERN stack app to keep track of your expenses and your incoms , which you may want to see your how much do you spend in general and how much do you earn.

## Demo

[Deployed on Heroku (where i kept the front-end & back-end togother)](https://expense-tracker-mern-byzak.herokuapp.com/)

## Built using

#### Front-end

- [ReactJS](https://reactjs.org/) - Frontend framework
- [Context API using useContext & useReducer hooks](https://reactjs.org/docs/context.html) - For state management

#### Back-end

- [Node.js](https://nodejs.org/en/) - Runtime environment for JS
- [Express.js](https://expressjs.com/) - Node.js framework, makes process of building APIs easier & faster
- [MongoDB](https://www.mongodb.com/) - Database to store document-based data
- [Mongoose](https://mongoosejs.com/) - MongoDB object modeling for Node.js
- [Dotenv](https://www.npmjs.com/package/dotenv) - To load environment variables from a .env file

## Features

- add or delete transactions
- calculate the total income, the total expenses, and the total balance

## Screenshots

![Desktop-1]()

## Usage

#### Env variable:

Create a config.env file in ../server/config directory and add the following:

```
MONGODB_URI = "Your Mongo URI"
PORT = 5000
NODE_ENV="development or production"

```

#### Client:

Open client/package.json & change "proxy" to a port tht suite you in case you have changed the port in server side 

```
cd client
npm install
npm start
```

#### Server:

Note: Make sure that you have installed 'nodemon' as global package.

```
cd server
npm install
npm run dev
```
