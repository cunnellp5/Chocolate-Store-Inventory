
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE chocolate; ALTER SEQUENCE chocolate_id_seq restart with 1;')
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('chocolate').insert({
          name: "Oreo",
          price_lb: 1099,
          type: 'Milk/Dark',
          delicious_factor:'Really yummy'
        }),
        knex('chocolate').insert({
          name: "Grahm Cracker",
          price_lb: 1099,
          type: 'Milk/Dark',
          delicious_factor:'Damn delicious'
        }),
        knex('chocolate').insert({
          name: "Walnut Bark",
          price_lb: 1099,
          type: 'Milk/Dark',
          delicious_factor:'So good, one might claim there is a god'
        }),
        knex('chocolate').insert({
          name: "Butter Crunch",
          price_lb: 1099,
          type: 'Milk/Dark & has nuts',
          delicious_factor:'Jesus Christ...'
        }),
        knex('chocolate').insert({
          name: "Pretzels",
          price_lb: 1099,
          type: 'Milk/Dark',
          delicious_factor:'Classic Crunch!'
        }),
        knex('chocolate').insert({
          name: "Hazelnut Praline",
          price_lb: 1099,
          type: 'Milk/Dark',
          delicious_factor:'Silky Smoove'
        }),
        knex('chocolate').insert({
          name: "Marzipan",
          price_lb: 1099,
          type: 'Milk/Dark',
          delicious_factor:'Oh! yum'
        }),
        knex('chocolate').insert({
          name: "Razberry Jellies",
          price_lb: 1099,
          type: 'Milk/Dark',
          delicious_factor:'What up Razzz?!'
        }),
        knex('chocolate').insert({
          name: "Non Pareils",
          price_lb: 1099,
          type: 'Milk/Dark',
          delicious_factor:'Little globs of heaven'
        }),
        knex('chocolate').insert({
          name: "Turtles",
          price_lb: 1099,
          type: 'Milk/Dark',
          delicious_factor:'A staple in your diet!'
        })
      ]);
    });
};
