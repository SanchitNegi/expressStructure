const mongoose = require('mongoose');

const {
    db
} = require('../config');
var connectionString = "";
if (process.env.NODE_ENV == "staging") {
    connectionString = `mongodb://${db.username}:${db.password}@${db.host}:${db.port}/${db.database}`

} else {
    connectionString = `mongodb://${db.host}:${db.port}/${db.database}`

}
const options = {
    useNewUrlParser: true
};

mongoose.Promise = global.Promise;

mongoose.connect(connectionString, options, () => {
    console.log('Successfully connected to Mongo', db.database)
});