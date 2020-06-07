import * as Knex from "knex";

export async function seed(knex: Knex) {
    await knex('items').insert([
        { title: 'Lâmpadas', image: 'lambadas.svg' },
        { title: 'Pilhas e Baterias', image: 'baterias.svg' },
        { title: 'Papéis e Papelão', image: 'papeis-papela.svg' },
        { title: 'Resíduos Eletrônicos', image: 'eletronicos.svg' },
        { title: 'Resíduos Orgânicos', image: 'organicos.svg' },
        { title: 'Óleo de Cozinha', image: 'oleo.svg' }
    ])
}