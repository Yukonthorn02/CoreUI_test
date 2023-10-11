const { json } = require("express");
const mongoose = require("mongoose");
const schema = mongoose.Schema;

const SchemaData = new schema({
    sta_name: {
        type: String,
        required: true,
    },
}, {
    timestamps: {
        createdAt: "CREATED_AT",
        updatedAt: "UPDATED_AT"
    },
});

const stts_status = mongoose.model("stts_status", SchemaData, "stts_status");
module.exports = stts_status;