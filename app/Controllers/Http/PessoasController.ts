/* eslint-disable prettier/prettier */
import Pessoa from 'App/Models/Pessoa'

export default class PessoasController {
  public async criarPessoa({ request }) {
    try {
      const { nome, cpf, endereco } = request.all()
      const novaPessoa = new Pessoa()
      ;(novaPessoa.nome = nome),
        (novaPessoa.cpf = cpf),
        (novaPessoa.endereco = endereco),
        novaPessoa.save()
    } catch (error) {
      console.log(error)
    }
  }

  public async listarPessoas() {
    const pessoas = await Pessoa.all()
    return pessoas
  }
}
