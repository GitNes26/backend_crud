'use strict'
const Comment = use('App/Models/Comment')
const Database = use ('Database')

class CommentController {
    async store({request, response}){
        const commentData = request.only(['comment','user','product'])
        const comment = await Comment.create(commentData)
        return response.created({
            status: true,
            data: comment,
        })
    }

    async commentsByProduct({params:{id}, response }){
        // const comments = await Comment.select('*').where('product', id ).fetch()
        const comments = await Database.select('comments.comment','users.username','products.product')
        .table('comments')
        .innerJoin('products','comments.product','products.id')
        .innerJoin('users','comments.user','users.id')
        .where('comments.product',id )
        return response.json(comments)
    }

    async index ({ response }) {
        // let comments = await Comment.query().with('user').fetch()
        let comments = await Comment.query().fetch()
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
