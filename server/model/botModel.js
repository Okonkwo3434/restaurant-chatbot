const botSchema = new mongoose.Schema({
    name: {
        type: String,
        lowercase: true,
        unique: true,
        topic: String,
        chat: [chat] 
    },

    createdAt: {
        type: Date,
        default: Date.now
    },

    updatedAt: {
        type: Date,
        default: Date.now
    },

})

const Chat = mongoose.model("chat", chatSchema);