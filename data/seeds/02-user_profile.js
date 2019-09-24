
exports.seed = function(knex) {
  return knex('user_profile').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('user_profile').insert([
        {
          residence: "U.S",
          zipcode: 95124,
          occupation: "Student",
          age: 34,
          user_id: 1
        }
      ]);
    });
};