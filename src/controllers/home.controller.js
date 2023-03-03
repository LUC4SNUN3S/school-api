import Student from "../models/students.model";

class HomeController {
   async index(req, res) {
   
        res.json({
            message: 'hello world'
         
        })
    }
}

export default new HomeController();