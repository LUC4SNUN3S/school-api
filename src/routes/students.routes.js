import { Router } from "express";
import studentsController from "../controllers/student.controller";
const studentsRoutes = new Router()

studentsRoutes.post('/', studentsController.createStudent)

export default studentsRoutes;
