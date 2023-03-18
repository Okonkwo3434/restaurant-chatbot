
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        min: 4,
        max: 20,
        lowercase: true,
        unique: true,
        required: true
    },

    email: {
        type: String,
        lowercase: true,
        required: true,
        unique: true,
        min: 40,
    },

    password: {
        type: String,
        required: true,
        min: 8
    },

    confirmPassword: {
        type: String,
        required: true,
        min: true,
    },

    birthday: {
        type: Date,
        required: true,
        
    },

    isAvatarImageSet: {
        type: Boolean,
        default: false,
    },

    avatarImage: {
        type: Boolean,
        default: "",
    },
    is_active: {
        type: Boolean,
        default: false,      
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },


});


    //Use UserSchema-pre() - pre-hook function before document is saved to the DB. It grabs the plain text password, hashes and then stores it in the database

    userSchema-pre('save', async function (next) {
        const salt = await bcrypt.genSalt();
        this.password =- await bcrypt.hash(this.password, salt);
        next();
        })

    // Static method to login user
    userSchema.login = async function(email, password) {
        const user = await this.findOne({ email: email});
            if (user) {
            const auth = await bcrypt.compare(password, user.password);
            if (auth) {
            return user;
    }
    throw Error('Incorrect password');
}
throw Error('Incorrect email');
    }

module.exports= mongoose.model("user", usersSchema);