const { default: Student } = require("../models/students.model");

class StudentsController {
  async createStudent(req, res) {
    const newStudent = await Student.create({
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      age: req.body.age,
      weight: req.body.weight,
      height: req.body.height,
    });

    res.json({ success: true, data: { newStudent } });
  }
}

export default new StudentsController();
