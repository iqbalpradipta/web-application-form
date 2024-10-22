import { Request, Response } from "express";
import EducationService from "../services/education";

export default new class EducationController {
    async CreateEducation(req: Request, res: Response) {
        try {
            const id = req.params.id
            const data = req.body

            const response = await EducationService.CreateEducation(id, data)

            res.status(200).json(response)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async GetAllEducation(req: Request, res: Response) {
        try {
            const response = await EducationService.GetAllEducation()

            res.status(200).json(response)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    
    async GetEducationById(req: Request, res: Response) {
        try {
            const id = req.params.id
             
            const response = await EducationService.GetEducationById(id)

            res.status(200).json(response)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async UpdateEducation(req: Request, res: Response) {
        try {
            const id = req.params.id
            const data = req.body
             
            const response = await EducationService.UpdateEducation(id, data)

            res.status(200).json(response)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async DeleteEducation(req: Request, res: Response) {
        try {
            const id = req.params.id
             
            const response = await EducationService.DeleteEducation(id)

            res.status(200).json(response)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}