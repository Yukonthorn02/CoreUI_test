const { json } = require("express");
const mongoose = require("mongoose");
const schema = mongoose.Schema;

const SchemaData = new schema({
    typ_name: {
        type: String,
        required: true,
    },
}, {
    timestamps: {
        createdAt: "CREATED_AT",
        updatedAt: "UPDATED_AT"
    },
});

const stts_types = mongoose.model("stts_types", SchemaData, "stts_types");
module.exports = stts_types;