'use strict'
const Product = use('App/Models/Product')

class ProductController {
    async store({request, response}){
        const productData = request.only(['product','price'])
        const product = await Product.create(productData)
        return response.created({
            status: true,
            data: product,
        })
    }

    async index ({ response }) {
        let products = await Comment.query().fetch()
        return response.json(products)
    }

    async update({request, response, params:{id}}){
        const product = request.input('product')
        const price = request.input('price')

        let prod = await Comment.find(id)
        
        prod.product = product
        prod.price = price

        await prod.save()
        
        return response.json(prod)
    }

    async destroy({params:{id}}){
        const product = await Product.find(id)
        
        await product.delete()
    }
}

module.exports = ProductController
