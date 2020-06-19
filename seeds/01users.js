
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'ifragoso', email: 'ianfragoso@yahoo.com', password: 'password'},
        {username: 'thotchkiss', email: 'mtknowlton67@gmail.com', password: 'password'},
        {username: 'danderson', email: 'danfanderson@gmail.com', password: 'password'},
        {username: 'rtennekone', email: 'ravindra.tennekone@gmail.com', password: 'password'},
        {username: 'cpalmenta', email: 'palmentac@gmail.com', password: 'password'},
        {username: 'erice', email: 'ericmichaelrice@protonmail.com', password: 'password'},
        {username: 'kbaird', email: 'keinobaird@gmail.com', password: 'password'},
      ]);
    });
};
