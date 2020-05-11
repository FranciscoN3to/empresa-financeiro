# GERENCIADOR FINCEIRO

Gerenciador financeiro para organizar finanças e vendas

## MIGRATES

Uso da lib [knex.js](http://knexjs.org)

- create_table_users
    - id
    - username
    - email
    - password
    - token_login
    - foto
    - cargo
    - created_at
    - updated_at
- create_table_produtos_servicos
    - id
    - nome
    - tipo (produto / servico)
    - marca
    - valor
    - quantidade
    - descricao
    - created_at
    - updated_at
- create_table_colaboradores
    - id
    - nome
    - sobre_nome
    - email
    - celular (DDD + NUMERO)
    - data_nascimento
    - cpf
    - cnpj
    - endereco_rua
    - endereco_numero
    - endereco_bairro
    - endereco_cidade
    - endereco_estado
    - endereco_cep
    - created_at
    - updated_at
- create_table_material_estoque
    - id
    - nome
    - valor
    - marca
    - quantidade
    - created_at
    - updated_at
- create_table_compras (Banco dependente do banco "materia_estoque")
    - id
    - id_materia
    - data_compra
    - created_at
    - updated_at
- create_table_promocoes
    - id
    - id_produto (id do produto ou serviço)
    - valor
    - dia_promocao (dias da semana)
    - created_at
    - updated_at
- create_table_vendas
    - id
    - id_produto (id do produto ou servico)
    - id_cliente (id do cliente relacionado a venda)
    - id_funcionario (id do funcionario relacionado a venda)
    - valor (valor inteiro da venda)
    - tipo_pagamento (parcelado ou a vista)
    - numero_parcelas
    - obs (observação feita pelo funcionario no momento da venda)
    - created_at
    - updated_at
- create_table_pagamentos (Banco dependente do banco "vendas")
    - id
    - id_venda
    - numero_parcela (numero de ordem na qual a parcela se encontra)
    - pago (true ou false)
    - valor (valor da parcela)
    - data_pagamento (data na qual a parcela será paga)
    - created_at
    - updated_at
- create_table_clientes
    - id
    - nome
    - sobrenome
    - celular (DDD + NUMERO)
    - email
    - created_at
    - updated_at
- create_table_notificacoes_clientes
    - nome 
    - repetir (true ou false)
    - repeticoes (numero de repetições caso coluna "repetir": true)
    - periodo (periodo em dias para as repetições)
    - horario (horario para a tarefa ser realizada)
    - mensagem
    - via (whatsapp, email)
    - filtro_cliente (ativo, inativo, pagamento_atrasado)
    - filtro_dias (dias referente a coluna "filtro_cliente")
    - created_at
    - updated_at

## SEEDS
- 001_users
- 002_produtos_servicos
- 003_colaboradores
- 004_material_estoque
- 005_promocoes
- 006_vendas
- 007_clientes
- 008_cron_jobs
