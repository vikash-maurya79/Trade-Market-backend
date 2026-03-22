const { mongoose } = require("mongoose");
const DemateSchema = require("../schemas/DemateAccountSchema");

const DemateAccount = mongoose.model('DemateAccount', DemateSchema);

module.exports = DemateAccount;