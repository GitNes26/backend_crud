'use strict'
const User = use('App/Models/User')

class UserController {
    async store({request, response}){
        const userData = request.only(['username', 'email', 'password'])
        const user = await User.create(userData)

        return response.created({
            status: true,
            data: user,
        })
    }

    async update({request, response, params:{id}}){
        const name = request.input('name')
        const password = request.input('password')

        let user = await User.find(id)
        
        user.name = name
        user.password = password

        await user.save()
        
        return response.json(user)
    }

    async destroy({params: {id}}){
        const usuario = await User.find(id)
        
        await usuario.delete()
    }
}

module.exports = UserController
