const Teacher = require("../models/teacherModel");

module.exports.createTeacher = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      quote,
      email,
      address,
      faculty,
      gender,
      photo,
      status,
      qualifications,
    } = req.body;

    // Required fields validation
    if (
      !firstName ||
      !lastName ||
      !quote ||
      !email ||
      !address ||
      !faculty ||
      !gender ||
      !qualifications
    ) {
      return res
        .status(400)
        .json({ message: "Missing one or more required fields" });
    }

    // Normalize inputs
    const normalizedEmail = email.toLowerCase().trim();
    const normalizedFirstName = firstName.trim();
    const normalizedLastName = lastName.trim();
    const normalizedAddress = address.trim();

    // Check if email already exists
    const emailExists = await Teacher.findOne({ email: normalizedEmail });
    if (emailExists) {
      return res
        .status(409)
        .json({ message: "Email already registered", field: "email" });
    }

    // Create new teacher
    const newTeacher = await Teacher.create({
      firstName: normalizedFirstName,
      lastName: normalizedLastName,
      quote,
      email: normalizedEmail,
      address: normalizedAddress,
      faculty,
      gender,
      photo: photo ? photo.trim() : undefined,
      status: status || "Active",
      qualifications,
    });

    return res
      .status(201)
      .json({ message: "New Teacher Added", teacher: newTeacher });
  } catch (error) {
    console.error("Error:", error);

    if (error.code === 11000) {
      const duplicatedField = Object.keys(error.keyValue)[0];
      return res.status(409).json({
        message: `Duplicate value for field: ${duplicatedField}`,
        field: duplicatedField,
      });
    }

    return res.status(500).json({ message: "Internal Server Error" });
  }
};
