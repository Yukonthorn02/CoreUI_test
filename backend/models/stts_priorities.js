const { json } = require("express");
const mongoose = require("mongoose");
const schema = mongoose.Schema;

const SchemaData = new schema({
    pri_name: {
        type: String,
        required: true,
    },
}, {
    timestamps: {
        createdAt: "CREATED_AT",
        updatedAt: "UPDATED_AT"
    },
});

const stts_priorities = mongoose.model("stts_priorities", SchemaData, "stts_priorities");
module.exports = stts_priorities;