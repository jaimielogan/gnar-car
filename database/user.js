var knex = require('./config');
var bcrypt = require('bcrypt');

// User Queries
var query = {
  getAllUsers: function() {
    return knex('users');
  },

  findUser: function(username) {
    return knex('users').where('username', username);
  },

  hashPassword: function(password) {
    return bcrypt.hashSync(password, 10);
  },

  findUserInformation: function(username) {
    return knex('user')
      .select('id', 'username', 'fullName')
      .where('username', username).first();
  },

  findHashedPassword: function(username) {
    return knex('user')
      .select('user.password')
      .where('user.username', username).first();
  },

  authenticateUser: function(username, password) {
    return this.findUser(username)
    .then(function(userData) {
      if (!userData) {
        return false;
      }
      return this.findHashedPassword(username)
      .then(function(hashedPassword) {
        hashedPassword = hashedPassword.password;
        return bcrypt.compareSync(password, hashedPassword);
      });
    });
  },

  addUser: function(username, email, password) {
    return knex('users')
     .insert({
       username: username,
       password: this.hashPassword(password),
       phone: null,
       email: null,
       city: 'Denver',
       state: 'CO',
       zip: '80216',
       image_url: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Blank_woman_placeholder.svg',
       admin: false
     });
  }
};

module.exports = query;
