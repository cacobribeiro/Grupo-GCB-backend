- ROTAS INSERT:

Metodo: POST
URL: http://localhost:3001/

Cadastra um medico no sistema.
enviado via body-parser os seguintes dados:

{
"name": "Caio Ribeiro",
"CRM": 4227433,
"fixFone": 1155623285,
"fone": 11976512702,
"cep": 14651160,
"andress": "Rua Osmar Fregona",
"especialidade": "CARDIOLOGIA INFANT2IL",
"especialidade2": "CARDIOLOGIA CLÍNICA"
}

OBS: especialidades só são aceitas dentro das expecificadas.

---

Metodo: GET
URL: http://localhost:3001/

Traz todos os medicos no sistema.
não precisa ser enviado nada para o servidor.

---

Metodo: PUT
URL: http://localhost:3001/editar/xx

sendo xx o ID passado via link para editar o usuario com id xx no banco.

---

Metodo: GET
URL: http://localhost:3001/buscar

Rota implementada para buscar um texto de acordo com a categoria de busca desejado, modo de fazer a requisição:

{
"type": "name",
"search": "Cam"
}

---

Metodo: DELETE
URL: http://localhost:3001/xx

Sendo XX igual ao ID do usuario a ser deletado.
