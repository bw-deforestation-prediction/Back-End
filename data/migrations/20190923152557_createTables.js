
exports.up = function(knex) {
  return knex.schema
    //user table
    .createTable('user', tbl => {
        tbl.increments();
        tbl.string('first_name', 128);
        tbl.string('last_name',128);
        tbl.string('email').notNullable();
        tbl.string('password').notNullable();
    })

    //profile table
    .createTable('user_profile', tbl => {
        tbl.increments();
        tbl.string('residence');
        tbl.integer('zipcode').unsigned();
        tbl.string('occupation');
        tbl.float('age');
        //foreign key
        tbl
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('user')

    
    })
};

exports.down = function(knex) {
    return knex.schema
                    .dropTableIfExists('user_profile')
                    .dropTableIfExists('user')
};
