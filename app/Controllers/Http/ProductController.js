'use strict'
const Product = use('App/Models/Product')

class ProductController {
    async store({request, response, auth}){
        const product = new Product()
        const user = await auth.getUser()
        product.product = request.input('product')
        product.price = request.input('price')
        product.user = user.id

        if (await product.save()) {
            return response.json(product)
        }
        // const productData = request.only(['product','price','user'])
        // const product = await Product.create(productData)
        // return response.created({
        //     status: true,
        //     data: product,
        // })
    }

    async index ({ response }) {
        let products = await Product.query().fetch()
        return response.json(products)
    }

    async update({request, response, params:{id}, auth}){
        const user = await auth.getUser()
        const product = request.input('product')
        const price = request.input('price')

        let prod = await Product.find(id)
        
        prod.product = product
        prod.price = price
        prod.user = user.id

        await prod.save()
        
        return response.json(prod)
    }

    async destroy({params:{id}}){
        const product = await Product.find(id)
        
        await product.delete()
    }
}

module.exports = ProductController
