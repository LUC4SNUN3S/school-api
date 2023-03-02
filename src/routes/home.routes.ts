import { Router } from "express";
import homeController from "../controllers/home.controller";
const homeRoutes = new Router()

homeRoutes.get('/', homeController.index)

export default homeRoutes;
