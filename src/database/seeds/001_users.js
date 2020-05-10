
exports.seed = function(knex) {
// Deletes ALL existing entries
  return knex('users')
    .then(() => {
      // Inserts seed entries
      return knex('users').insert(
        [
          {    
            username: 'FranciscoNeto',
            nome: 'Francisco',
            sobrenome: 'Neto',
            cpf: '02527884270',
            cnpj: '',
            rg: 'teste123',
            celular: '35997433851',
            rua: 'Tv. josé joaquim',
            numero: '74',
            bairro: 'São Geraldo',
            cidade: 'Pouso Alegre',
            estado: 'MG',
            cep: '37558045',
            token_login: 'b8158a5bf474173c92fcfcb6ce764485',
            senha: 'd662367396d1295ef8b3f2deb375b00b', //352653
          }
        ]
      )
    })
}
