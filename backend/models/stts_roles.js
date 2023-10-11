const { json } = require("express");
const mongoose = require("mongoose");
const schema = mongoose.Schema;

const SchemaData = new schema({
    rol_name: {
        type: String,
        required: true,
    },
}, {
    timestamps: {
        createdAt: "CREATED_AT",
        updatedAt: "UPDATED_AT"
    },
});

const stts_roles = mongoose.model("stts_roles", SchemaData, "stts_roles");
module.exports = stts_roles;