const { json } = require("express");
const mongoose = require("mongoose");
const schema = mongoose.Schema;

const SchemaData = new schema({
    acc_status_accept: {
        type: String,
        required: true,
    },
    acc_time: {
        type: String,
        required: true,
    },
    acc_act: {
        type: schema.Types.ObjectId,
        ref: "stts_accounts",
        required: true
    },
}, {
    timestamps: {
        createdAt: "CREATED_AT",
        updatedAt: "UPDATED_AT"
    },
});

const stts_accept_tickets = mongoose.model("stts_accept_tickets", SchemaData, "stts_accept_tickets");
module.exports = stts_accept_tickets;