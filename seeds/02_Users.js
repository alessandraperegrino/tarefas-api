exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {email: 'usuario 1'},
        {email: 'usuario 2'},
        {email: 'usuario 3'}
      ]);
    });
};