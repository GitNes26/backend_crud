'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Comment extends Model {

    users(){
        return this.belongsTo('App/Models/User')
    
    }

    products(){
        return this.belongsTo('App/Models/Product')

    }
}

module.exports = Comment
