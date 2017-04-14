"use strict";
const POSTGRES_CONNECTION_STRING = 'postgresql://ejjdtmnmgsuwvk:7550269a2ee3a15ff562f7a4fef2f2681d4b160419518a61f5628c492842ff6d@ec2-54-228-235-185.eu-west-1.compute.amazonaws.com:5432/d7ijml58sqdn92?ssl=true';

let express = require("express");
let app = express();
const PORT    =   process.env.PORT || 8080;

let APIRouter = express.Router();
let bodyParser = require("body-parser");

let Sequelize = require("sequelize");
let sequelize = new Sequelize(POSTGRES_CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: true
    }
});

app.use("/api", APIRouter);
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

sequelize
    .authenticate()
    .then(function(err) {
        console.log('Connection has been established successfully.');
    })
    .catch(function (err) {
        console.log('Unable to connect to the database:', err);
    });

let User = sequelize.define(
    'user', {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        public_key: Sequelize.STRING
    }, {
        timestamps: false
    }
);

/*
User.findOne({
    where: {
        public_key: "ckey"
    }
}).then(function (data) {
   console.log(data.dataValues);
});

User.create({
    name: "Test user",
    email: "Test@gmail.com",
    public_key: "Test key"
});
*/

function loadUserByID(userID) {
    return new Promise(function (resolve, reject) {
        User.findOne({
            where: {
                id: userID
            }
        }).then((data) => {
            if (data === null || data === undefined) {
                reject({status: 404});
            }
            resolve(data);
        }).catch((err) => {
            reject(err);
        });
    });
}

/**
 * Routes for the API.
 */
APIRouter.get("/", function (req, res, err) {
   res.send("API Hit");
});

// Get an user by ID
APIRouter.get("/user_id/:user_id", function (req, res, err) {
   let userID = req.params.user_id;

   loadUserByID(userID).then(function (userData) {
      res.send(userData);
   }).catch(function (err) {
      if (err.status) {
          res.status(err.status);
          res.send({error: "User not found."});
      } else {
          res.status(400);
          res.send({error: "Some error has occurred."});
      }
   });
});

// // Create a new user
app.post("/api/new_user", function(req, res) {
    console.log(req.body);
    res.send(req.body);
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}.`);
});