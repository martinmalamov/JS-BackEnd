// const { v4 } = require('uuid')
// const path = require('path')
// const { saveCube } = require('../controllers/database')
// const databaseFile = path.join(__dirname, '..', 'config/database.json')

// class Cube {
//     constructor(name, description, imageUrl, difficulty) {
//         this.id = v4()
//         this.name = name || 'No Name'
//         this.description = description
//         this.imageUrl = imageUrl || 'placeholder'
//         this.difficulty = difficulty || 0
//     }
// }

const mongoose = require('mongoose')

const CubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        match: [/^[A-Za-z0-9]+$/, 'Cube name is not valid'],
        minlength: 5,
    },
    description: {
        type: String,
        required: true,
        maxlenght: 2000,
        match: [/^[A-Za-z0-9 ]+$/, 'Cube description is not valid'],
        minlength: 20
    },
    imageUrl: {
        type: String,
        required: true,
    },
    difficulty: {
        type: String,
        required: true,
        min: 1,
        max: 10
    },
    accessories: [{
        type: 'ObjectId',
        ref: 'Accessory'
    }],
    creatorId: {
        type: 'ObjectId',
        ref: 'User'
    }
})

// CubeSchema.path('imageUrl').validate(function (url) {
//     return url.startWith('http://') || url.startWith('https://')
// }, 'Image url is not valid')

module.exports = mongoose.model('Cube', CubeSchema)