//Schema
const mongoose = require("mongoose")
const log = require("debug")("fruits:models:server")

const fruitSchema = new mongoose.Schema({
    name: { type:String, required: true },
    colour: { type:String, required: true },
    readyToEat: Boolean
})

const Fruit = mongoose.model("Fruit", fruitSchema)
log("Fruit model created")

module.exports =  Fruit