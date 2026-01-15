const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    demateAccountId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DemateAccount'
    },
    holding: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'holdings'
        }
    ]

})
module.exports = UserSchema;