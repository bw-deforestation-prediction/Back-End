exports.seed = function(knex) {
  return knex('user').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {
          first_name: "Lambda",
          last_name: "School",
          email: "abc@lambda.com",
          password: "Test"
        }
      ]);
    });
};