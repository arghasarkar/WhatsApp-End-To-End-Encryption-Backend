var ORM = require('postgresql-orm');

ORM.setup('postgresql://ejjdtmnmgsuwvk:7550269a2ee3a15ff562f7a4fef2f2681d4b160419518a61f5628c492842ff6d@ec2-54-228-235-185.eu-west-1.compute.amazonaws.com:5432/d7ijml58sqdn92?ssl=true');

var userEntityDefinition = {
    name: 'users', // will match table with name 'users'
    attributes: {
        email: {
            type: 'character varying',
        },
        name: {
            type: 'character varying'
        },
        publickey: {
            type: 'character varying'
        }
    }
};

var User = ORM.define(userEntityDefinition)

/*User.dropTable(function(err) {
    // existing table dropped
});

User.createTable(function(err) {
    // table created
});*/

User.save({name: 'John', email:"John@john.com", publickey:"johnpk"}, function(err, savedEntity) {
    // do something
    savedEntity.id;
});

/*
User.create({firstName: 'John'}, function(err, createdEntity) {
    // do smthg
})

User.update({id: 123, lastName: 'Doe'}, function(err, updatedEntity) {
    // do smthg
});
*/

User.load({id: 2}, function(err, loadedEntity) {
    // do smthg
    console.log(loadedEntity);
});