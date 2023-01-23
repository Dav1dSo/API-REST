import Aluno from "../model/Alunos";

const HomeController = async (req, res) => {
    const newAluno = await Aluno.create({
        nome: 'Teste',
        sobrenome: 'Testando',
        email: 'teste@gmail.com',
        idade: 21
    });
    res.json(newAluno);
};

export default HomeController;  