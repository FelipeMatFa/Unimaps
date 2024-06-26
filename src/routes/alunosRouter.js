// 
const { Router } = require('express');
const router = Router();

// Importar funções para as rotas
const {
    listarUsuarios,
    cadastrarAluno,
    update,
    deleteAluno,
    listarEspecifico
} = require('../controllers/alunosController');

router.get('/alunos', listarUsuarios);
router.post('/aluno/create', cadastrarAluno);
router.put('/aluno/update/:id', update);
router.delete('/alunos/delete/:id' , deleteAluno);
router.get('/alunos/:id' , listarEspecifico);

module.exports = router;