const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;
const { alphaOnly } = require('./masterValidator')(); 

mongoose.connect(
    'mongodb://localhost/ratemydogs',
    {useNewUrlParser:true},
    err => err ? console.log(err) : console.log("====> db running fine"),    
)

const RatingSchema = new Schema({
    rating:{ 
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    comment: {
        type: String,
        maxlength: 50,
    }
})

const DogSchema = new Schema({
    name: { 
        type: String, 
        required:[true,'Please enter a name']
    },
    url:  { 
        type: String, 
        required:true,
        unique: true,
        uniqueCaseInsensitive: true ,
    },
    breed:{ 
        type:String, 
        minlength: 4,
        validate: [ alphaOnly.validator, alphaOnly.description, ],
     },
     ratings: [RatingSchema]
})

DogSchema.plugin(uniqueValidator, { message: 'Sorry, that image is already on our site!' });



module.exports = {
    Dog : mongoose.model('Dog', DogSchema),
    Rating : mongoose.model('Rating', RatingSchema),
}