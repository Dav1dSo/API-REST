import Aluno from "../model/Aluno";

const HomeController = async (req, res) => {
    const newAluno = await Aluno.create({
        nome: 'Ui',
        sobrenome: 'Ai',
        email: 'Ui@gmail.com',
        idade: 24
    });
    res.json(newAluno);
};

export default HomeController;