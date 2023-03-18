const mongoose = require("mongoose")
const contextData = mongoose.Schema({
    internal_id: {type: String},

    data: {type: mongoose.Schema.type.mixed},

    isCompressed: {type: Boolean, default: false},

    collection: {ContextData, minimize:false}
    });

    const ContextData = monggose.model("ContextData", contextData);