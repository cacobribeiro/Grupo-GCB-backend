- ROTA INSERT:

Metodo: POST
URL: http://localhost:3001/

Cadastrar um medico no sistema.
enviado via body-parser os seguintes dados:

{
"name": "Caio Ribeiro",
"CRM": "22.666.66",
"fixFone": (11)5562-3285,
"fone": (11)97651-2702,
"cep": "04651-160",
"numero": 71,
"especialidade": "CARDIOLOGIA INFANTIL",
"especialidade2": "CARDIOLOGIA CLÍNICA"
}

OBS: especialidades só são aceitas dentro das expecificadas.
Campos de CRM, fixFone, fone e CEP receberam REGEX de validação.

Todos os campos obrigatorios estão sendo validados pelo YUP e pelo Sequelize para não ter entrada errada dentro do banco de dados!

---

Metodo: GET
URL: http://localhost:3001/

Traz todos os medicos no sistema.
não precisa ser enviado nada para o servidor.

---

Metodo: PUT
URL: http://localhost:3001/editar/XX

sendo XX o ID passado via link para editar o usuario com id XX no banco.

Precisa ser enviado os novos dados do medico:

{
"name": "Marcos Aurelio",
"CRM": 5051122,
"fixFone": 1155623285,
"fone": 11976512702,
"cep": 14651160,
"andress": "Rua Osmar Fregona",
"especialidade": "CARDIOLOGIA INFANTIL",
"especialidade2": "CARDIOLOGIA INFANTIL"
}

---

Metodo: GET
URL: http://localhost:3001/buscar

Rota implementada para buscar um texto de acordo com a categoria de busca desejado, modo de fazer a requisição:

{
"type": "name",
"search": "Cam"
}

sendo TYPE o campo que deseja buscar, exemplo: name, CRM, fixFone, fone, cep, andress, especialidade, especialidade2.
e SEARCH é a palavra ou frase chave a ser procurada.

---

Metodo: DELETE
URL: http://localhost:3001/xx

Sendo XX igual ao ID do usuario a ser deletado.
