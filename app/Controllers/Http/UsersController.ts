// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async adicionarUser({ request }) {
    const { email, senha } = request.all()
    try {
      const user = new User()
      user.email = email
      user.password = senha
      user.save()
      return user
    } catch (error) {
      console.log(error)
    }
  }
}
