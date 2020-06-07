import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable('points', table => {
        table.increments('id').primary()
        table.string('image').notNullable()
        table.string('name').notNullable()
        table.string('email', 100).notNullable()
        table.string('whatsapp', 30).notNullable()
        table.decimal('latitude', 10, 8).notNullable()
        table.decimal('longitude', 11, 8).notNullable()
        table.string('city', 150).notNullable()
        table.string('uf', 2).notNullable()
    })
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable('points')
}

exports.config = { transaction: false }
