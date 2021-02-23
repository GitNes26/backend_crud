'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {

    users(){
        return this.belongsTo('App/Models/User')
    }

    comments (){
        return this.hasMany('App/Models/Comment')
    }
}

module.exports = Product
