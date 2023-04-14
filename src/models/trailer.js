const { Schema, model } = require('mongoose');

const trailerSchema = new Schema({
    title: {
        type: String,
        unique: true,
        require: true,
        trim: true,
    },

    year: {
        type: Number,
        require: true,
        trim: true
    },

    directors: {
        type: String,
        require: true,
        trim: true
    },

    image: {
        type: String
    },

    urlTrailer: {
        type: String
    }
})

const Trailer = model('Trailer', trailerSchema);

module.exports = Trailer;