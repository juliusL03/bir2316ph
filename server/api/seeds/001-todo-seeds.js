
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {
          message: "walk the dogs"
      },
      {
          message: "update address"
      },
      {
          message: "wash clothes"
      },
      {
          message: "call your mon"
      },
      ]);
    });
};
