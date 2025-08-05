const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    studentContact: {
      type: String,
      default: "..........",
    },
    guardianContact: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
    },
    grade: {
      type: String,
      required: true,
    },
    rollNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    guardianName: {
      type: String,
      required: true,
    },
    batchYear: {
      type: Number,
      required: true,
    },
    bus: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("student", studentSchema);
