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
- create_table_colaboradores
    - id
    - nome
    - sobre_nome
    - email
    - celular (DDD + NUMERO)
    - data_nascimento
    - cpf
    - cnpj
    - rg
    - endereco_rua
    - endereco_numero
    - endereco_bairro
    - endereco_cidade
    - endereco_estado
    - endereco_cep
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
- create_table_material_estoque
    - id
    - nome
    - marca
    - quantidade
    - created_at
    - updated_at
- create_table_compras (Banco dependente do banco "materia_estoque")
    - id
    - id_materia
    - valor
    - quantidade
    - data_compra
    - descricao
    - created_at
    - updated_at
- create_table_promocoes
    - id
    - id_produto (id do produto ou serviço)
    - valor
    - dia_promocao (dias da semana)
    - descricao
    - created_at
    - updated_at
- create_table_vendas
    - id
    - id_produto (id do produto ou servico)
    - id_cliente (id do cliente relacionado a venda)
    - id_colaborador (id do colaborador relacionado a venda)
    - valor (valor inteiro da venda)
    - tipo_pagamento (parcelado ou a vista)
    - numero_parcelas
    - tipo (produto, serviço)
    - descricao (observação feita pelo colaborador no momento da venda)
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
    - id
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
- create_table_sessions
    - id
    - type (access, refrash) 
    - token_session
    - ativo (status do token)
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


### Controllers Auth server
- GenerateAccessToken.js
    - AccessToken
    Recebe informações do usuario ("username" e "token_login") para criação do payload do token de autorização JWT.

    - RefrashToken
    Recebe informações do usuario ("username" e "token_login") para criação do payload do token de refrash para gerar um novo token de autorização quando o anterior for expirado.

- LoginController.js
Fase de autenticação do usuário. Aqui é criado dois tokens: accessToken (provido da função "AccessToken") e refrashToken (provido da função "RefrashToken). Logo apos a criação dos tokens, os mesmos serão registrados no banco de dados SQL para fins de segurança e identificação do usuario.

- AuthenticateTokenController.js
Recebe o token enviado pelo client para verificar se o token é válido ou não. 

- TokenRefrash.js
Atualizar e retornar um novo token de access do usuario

- LogoutController.js
Desativar o token de refrash do usuário, o front end deverá limpar o token de access.