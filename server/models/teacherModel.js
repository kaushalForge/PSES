const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    quote: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    address: { type: String, required: true, trim: true },
    faculty: {
      type: Array,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },
    photo: {
      type: String,
    },
    status: {
      type: String,
      enum: ["Active", "On Leave", "Retired", "Resigned", "Terminated"],
      default: "Active",
    },
    qualifications: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Teacher", teacherSchema);
