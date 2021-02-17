'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {

    comment (){
        return this.hasMany('App/Models/Comment')
    }
}

module.exports = Product
