const conn = require('../db/conn')

const { ObjectId } = require('mongodb')

class Product {
    constructor(name, price, description) {
        this.name = name
        this.price = price
        this.description = description
    }

    save() {
        const product = conn.db().collection('products').insertOne({
            name: this.name,
            price: Number(this.price),
            description: this.description
        })

        return product
    }

    static getProducts() {
        const products = conn.db().collection('products').find().toArray()

        return products
    }

    static async getProductById(id) {
        const product = await conn.db().collection('products').findOne({ _id: new ObjectId(id) })

        return product
    }
}

module.exports = Product