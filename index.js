"use strict";
const POSTGRES_CONNECTION_STRING = 'postgresql://ejjdtmnmgsuwvk:7550269a2ee3a15ff562f7a4fef2f2681d4b160419518a61f5628c492842ff6d@ec2-54-228-235-185.eu-west-1.compute.amazonaws.com:5432/d7ijml58sqdn92?ssl=true';

let express = require("express");
let app = express();
const PORT    =   process.env.PORT || 8080;
let APIRouter = express.Router();

let ORM = require('postgresql-orm');

ORM.setup(POSTGRES_CONNECTION_STRING);


let userEntityDefinition = {
    name: 'users', // will match table with name 'users'
    attributes: {
        /*id: {
            type: '	autoincrementing integer',
            unique: true
        },*/
        email: {
            type: 'character varying',
        },
        name: {
            type: 'character varying'
        },
        public_key: {
            type: 'character varying'
        }
    }
};

let User = ORM.define(userEntityDefinition);
/*
/!*User.dropTable(function(err) {
    // existing table dropped
});

User.createTable(function(err) {
    // table created
});*!/

User.save({id: null ,name: 'Jozzzzhna', email:"Johan@johna.com", public_key:"johnapk"}, function(err, savedEntity) {
    // do something
    console.log(err);
    console.log(savedEntity);
});

/!*
User.create({firstName: 'John'}, function(err, createdEntity) {
    // do smthg
})

User.update({id: 123, lastName: 'Doe'}, function(err, updatedEntity) {
    // do smthg
});
*!/
 */
User.load({"id": 3}, function(err, loadedEntity) {
    console.log(err);
    // do smthg
    console.log(loadedEntity);
});


function loadUserByID(userID) {

    return new Promise(function (resolve, reject) {
        User.load({id: 6},   function (err, loadedEntity) {
            if (err === undefined) {
                console.log(loadedEntity);
                resolve(loadedEntity);
            } else {
                reject(err);
            }
        })
    });
}

/**
 * Routes for the API.
 */
APIRouter.get("/", function (req, res, err) {
   res.send("API Hit");
});

APIRouter.get("/user_id/:user_id", function (req, res, err) {
   let userID = req.params.user_id;
   console.log(userID);
   loadUserByID(userID).then(function (userData) {
      res.send(userData);
   }).catch(function (err) {
      res.status(404);
      res.send({error: err});
   });
});

app.use("/api", APIRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}.`);
});