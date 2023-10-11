const { json } = require("express");
const mongoose = require("mongoose");
const schema = mongoose.Schema;

const SchemaData = new schema({
    act_username: {
        type: String,
        required: true,
    },
    act_password: {
        type: String,
        required: true,
    },
    act_number_phone: {
        type: String,
        required: false,
    },
    act_email_address: {
        type: String,
        required: false,
    },
    act_first_name_th: {
        type: String,
        required: false,
    },
    act_first_name_eng: {
        type: String,
        required: false,
    },
    act_last_name_th: {
        type: String,
        required: false,
    },
    act_last_name_eng: {
        type: String,
        required: false,
    },
    act_picture: {
        type: String,
        required: false,
    },
    act_gender: {
        type: String,
        required: false,
    },
    act_role: {
        type: schema.Types.ObjectId,
        ref: "stts_roles",
        required: true
    },
}, {
    timestamps: {
        createdAt: "CREATED_AT",
        updatedAt: "UPDATED_AT"
    },
});

const stts_accounts = mongoose.model("stts_accounts", SchemaData, "stts_accounts");
module.exports = stts_accounts;