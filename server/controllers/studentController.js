const Student = require("../models/studentModel");

module.exports.createStudent = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      dob,
      gender,
      email,
      studentContact,
      guardianContact,
      address,
      grade,
      rollNumber,
      guardianName,
      batchYear,
      photo,
      bus,
    } = req.body;

    // Required fields check
    if (
      !firstName ||
      !lastName ||
      !dob ||
      !gender ||
      !email ||
      !guardianContact ||
      !address ||
      !grade ||
      !rollNumber ||
      !guardianName ||
      !batchYear ||
      bus === undefined ||
      bus === null
    ) {
      return res
        .status(400)
        .json({ message: "Missing one or more required fields" });
    }

    // Normalize email & strings
    const normalizedEmail = email.toLowerCase().trim();
    const normalizedGrade = grade.trim();

    // Check email uniqueness globally
    const emailExists = await Student.findOne({ email: normalizedEmail });
    if (emailExists) {
      return res
        .status(409)
        .json({ message: "Email already registered", field: "email" });
    }

    // Check rollNumber uniqueness within same grade
    const rollExists = await Student.findOne({
      grade: normalizedGrade,
      rollNumber,
    });
    if (rollExists) {
      return res.status(409).json({
        message: `Roll number ${rollNumber} already exists in grade ${normalizedGrade}`,
        field: "rollNumber",
      });
    }

    // Create new student
    const newStudent = await Student.create({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      dob,
      gender,
      email: normalizedEmail,
      studentContact: studentContact ? studentContact.trim() : undefined,
      guardianContact: guardianContact.trim(),
      address: address.trim(),
      grade: normalizedGrade,
      rollNumber,
      photo,
      guardianName: guardianName.trim(),
      batchYear,
      bus,
    });

    return res
      .status(201)
      .json({ message: "New Student Added", student: newStudent });
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
