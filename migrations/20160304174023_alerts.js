
exports.up = function(knex, Promise) {
  return knex.schema.createTable('alerts', function(t){
    t.increments()
    t.text('title')
    t.text('date')
    t.text('author')
    t.text('image')
    t.text('body')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('alerts')
}
