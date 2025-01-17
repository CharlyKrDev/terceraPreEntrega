import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2'

const productsCollection = 'products'

const productsSchema = new mongoose.Schema({

    title:{type:String, required:true},
    description:{type:String, required:true},
    code:{type:String, required:true},
    price:{type:Number, required:true},
    status:{type:Boolean, required:false,default:true},
    stock:{type:Number, required:true },
    category:{type:String, required:true},
    thumbnail:{type:Array, default:[], required:false},
    owner:{type: String, unique: true}

})
productsSchema.plugin(mongoosePaginate);
const productsModel = mongoose.model(productsCollection,productsSchema )

export default productsModel