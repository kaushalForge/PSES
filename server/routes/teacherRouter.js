const express = require("express");
const router = express.Router();
const { createTeacher } = require("../controllers/teacherController");

router.post("/new", createTeacher);

module.exports = router;