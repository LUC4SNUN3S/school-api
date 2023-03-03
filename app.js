import dotenv from 'dotenv'
dotenv.config()

import './src/database'
import express from "express";
import homeRoutes from "./src/routes/home.routes";
import studentsRoutes from "./src/routes/students.routes";


class App {
  constructor() {
    this.app = express();
    this.midlewares();
    this.routes();
  }

  midlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoutes)
    this.app.use('/students', studentsRoutes)
  }
}

export default new App().app