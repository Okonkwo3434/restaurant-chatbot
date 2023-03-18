const mongoose = require("mongoose");
const messageSchema = new mongoose.Schema({
    message: {
        text: {
            type: String,
            required: true,
        },

    users: Array,
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },

    chatContainer:  {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "ChatContainer",
        },
    
        timestamps: true,
    },
});

module.exports = mongoose.model("Message", messageSchema);