const Datastore = require('nedb');
const path = require('path');

// Create database instances
const users = new Datastore({
    filename: path.join(__dirname, '../data/users.db'),
    autoload: true
});

const apartments = new Datastore({
    filename: path.join(__dirname, '../data/apartments.db'),
    autoload: true
});

// Create indexes
users.ensureIndex({ fieldName: 'email', unique: true });
apartments.ensureIndex({ fieldName: 'title' });

module.exports = {
    users,
    apartments
}; 