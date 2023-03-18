const chat = new mongoose.Schema({
    user: user,
    chat_body: String,

    chat_status: {
        type: Boolean,
        default: false,
    },

    createdAt: {
        type: Date,
        default: Date.now
    },

    })

    const Chat = mongoose.model("Chat", chat);