const { json } = require("express");
const mongoose = require("mongoose");
const schema = mongoose.Schema;

const SchemaData = new schema({
    cmt_messasge: {
        type: String,
        required: true,
    },
    cmt_date: {
        type: String,
        required: true,
    },
    cmt_act: {
        type: schema.Types.ObjectId,
        ref: "stts_accounts",
        required: true
    },
    cmt_tkt: {
        type: schema.Types.ObjectId,
        ref: "stts_tickets",
        required: true
    },
}, {
    timestamps: {
        createdAt: "CREATED_AT",
        updatedAt: "UPDATED_AT"
    },
});

const stts_comments = mongoose.model("stts_comments", SchemaData, "stts_comments");
module.exports = stts_comments;