const { json } = require("express");
const mongoose = require("mongoose");
const schema = mongoose.Schema;

const SchemaData = new schema({
    tkt_number: {
        type: String,
        required: true,
    },
    tkt_description: {
        type: String,
        required: false,
    },
    tkt_picture: {
        type: String,
        required: false,
    },
    tkt_title: {
        type: String,
        required: true,
    },
    tkt_time: {
        type: String,
        required: false,
    },
    tkt_start_date: {
        type: String,
        required: false,
    },
    tkt_last_update: {
        type: String,
        required: false,
    },
    tkt_status: {
        type: String,
        required: true,
    },
    tkt_priorities: {
        type: String,
        required: true,
    },
    tkt_types: {
        type: String,
        required: true,
    },
    tkt_book: {
        type: Boolean,
        required: true,
    },
    tkt_act: {
        type: schema.Types.ObjectId,
        ref: "stts_accounts",
        required: true
    },
    tkt_acc: {
        type: schema.Types.ObjectId,
        ref: "stts_accept_tickets",
        required: false
    },
}, {
    timestamps: {
        createdAt: "CREATED_AT",
        updatedAt: "UPDATED_AT"
    },
});

const stts_tickets = mongoose.model("stts_tickets", SchemaData, "stts_tickets");
module.exports = stts_tickets;