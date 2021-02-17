'use strict'
const Comment = use('App/Models/Comment')

class CommentController {
    async store({request, response}){
        const commentData = request.only(['coment','user','product'])
        const comment = await Comment.create(commentData)
        return response.created({
            status: true,
            data: comment,
        })
    }

    async index ({ response }) {
        let comments = await Comment.query().with('user').fetch()
        return response.json(comments)
    }

    async update({request, response, params:{id}}){
        const comm = request.input('comment')

        let com = await Comment.find(id)
        
        com.comment = comm
        await com.save()
        
        return response.json(com)
    }

    async destroy({params:{id}}){
        const comment = await Comment.find(id)
        
        await comment.delete()
    }
}

module.exports = CommentController
