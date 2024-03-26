const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PointSсhema = new Schema({
    type: {
        type: String,
        default: "Point",
    },
    coordinates: { type: [Number], index: "2dsphere" },
});

const DriverSchema = new Schema({
    email: {
        type: String,
        require: true,
    },
    driving: {
        type: Boolean,
        default: false,
    },
    geometry: PointSсhema,
});

const Driver = mongoose.model("driver", DriverSchema);
module.exports = Driver;
