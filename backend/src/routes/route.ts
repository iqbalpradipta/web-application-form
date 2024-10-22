import express from 'express'
import UserController from '../controllers/user'
import EducationController from '../controllers/education'

const router = express.Router()

// User
router.post("/user", UserController.CreateUser)
router.get("/user", UserController.GetAllUser)
router.get("/user/:id", UserController.GetUserById)
router.patch("/user/:id", UserController.UpdateUser)
router.delete("/user/:id", UserController.DeleteUser)

// Education
router.post("/education/:id", EducationController.CreateEducation)
router.get("/education", EducationController.GetAllEducation)
router.get("/education/:id", EducationController.GetEducationById)
router.patch("/education/:id", EducationController.UpdateEducation)
router.delete("/education/:id", EducationController.DeleteEducation)

export default router