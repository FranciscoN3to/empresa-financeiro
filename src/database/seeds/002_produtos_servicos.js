
exports.seed = function(knex) {
  // Deletes ALL existing entries
    return knex('produtos_servicos')
      .then(() => {
        // Inserts seed entries
        return knex('produtos_servicos').insert(
          [
            {    
              nome: 'Produto teste',
              valor: 50,
              tipo: 'produto',
              quantidade: 10
            }
          ]
        )
      })
  }
  