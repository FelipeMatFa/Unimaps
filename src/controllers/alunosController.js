// Importar a conexão com o banco de dados
const connection = require('../config/db')

// Função async: realiza uma requisição de forma paralela ao sistema
// request: nesta variável recuperamos os dados enviados na requisição
// response: tem a responsabilidade de retornar as informações para quem requisitou
async function listarUsuarios(request, response){
    // Variável para executar a consulta no banco
    const query = 'SELECT * FROM usuario;';

    // err: retorna erros na execução
    // results: retorna a ação realizada com sucesso
    connection.query(query, (err,results) => {
        if(results){
            response
                .status(200)
                .json({
                    sucess: true,
                    message: "Sucesso! Lista de alunos",
                    data: results
                });
        } else {
            response
                .status(400)
                .json({
                    sucess: false,
                    message: "Ooops! Não foi possivel listar as informações solicitadas!",
                    data: err
                });
        }
    });
}

async function cadastrarAluno(request,response){
    // 1° passo: recuperar variáveis
    // 2° passo: montar a query para inserir os dados
    // 3° passo: tentar executar a ação no banco
    // 4° passo: definir retornos da requisição
    console.log(request.body)
    // Recuperando dados da requisição
    const params = Array(
        request.body.nome,
        request.body.email,
        request.body.senha
    );

    const query = 'INSERT INTO usuario(nome,email,senha) values(?, ?, ?);';

    connection.query(query, params, (err, results) => {
        if(results){
            response
                .status(201)
                .json({
                    sucess: true,
                    message: "Sucesso! Aluno cadastrado",
                    data: results
                });
        }
    })
}


async function update(request, response) {
    // Comando Sql
    const query = 'UPDATE usuario nome = ?, email = ?, senha = ? WHERE id = ?; ';

    const params = Array(
        request.body.nome,
        request.body.dt_nascimento,
        request.body.time_do_coracao,
        request.params.id
    )

    connection.query(query, params, (err, results) => {
        if(results){
            response
                .status(200)
                .json({
                    sucess: true,
                    message: "Sucesso! Aluno atualizado com sucesso!",
                    data: results
                })
        }
    })
}

async function deleteAluno(request, response) { 
    // Comando sqp 
    const query = "DELETE FROM usuario WHERE id = ?; "; 
    const params = Array( request.params.id ); 
    connection.query(query, params, (err, results) => { 
        if (results) { 
            response 
            .status(200) 
            .json({ success: true
                   ,massage: "Usuario removido com sucesso!",
                    data: results }
        ) } else { 
            response 
            .status(400) 
            .json({ 
                success: false, 
                message: "Usuario não removido!", 
                mysql: err }
            ) 
        } 
    }) 
} 

async function listarEspecifico(request, response) { 
    // Comando sqp 
    const query = "SELECT * FROM usuario WHERE id = ?; ";
    const params = Array( request.params.id ); 
    connection.query(query, params, (err, results) => { 
        if (results) { 
            response 
            .status(200) 
            .json({ success: true,
                    massage: "Usuario listado com sucesso!", 
                    data: results 
                }) 
        } else { 
            response 
            .status(400) 
            .json(
                { 
                    success: false,
                    message: "Usuario não listado!", 
                    mysql: err 
                }) 
            } 
    }) 
} 

module.exports = {
    listarUsuarios,
    cadastrarAluno,
    update,
    deleteAluno, 
    listarEspecifico
}