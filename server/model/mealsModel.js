const mongoose = require("mongoose");

const mealsSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true,
        unique: true
    },

    picture: {
        type: Image,
        required: true,
        unique: true
    },

    short_desc: {
        type: String,
        required: true
    },

    long_desc: {
        type: String,
        required: true
    },

    quantity: {
        type: Number,
        required: true
    },

    review: {
        type: String,
        required: true
    },

    rating: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },

})

module.exports = mongoose.model("Meals", mealSchema)
