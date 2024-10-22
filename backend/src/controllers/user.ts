import { Request, Response } from "express";
import UserService from "../services/user";

export default new class UserController {
    async CreateUser(req: Request, res: Response) {
        try {
            const data = req.body

            const response = await UserService.CreateUser(data)

            res.status(200).json(response)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async GetAllUser(req: Request, res: Response) {
        try {
            const response = await UserService.GetAllUser()

            res.status(200).json(response)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    
    async GetUserById(req: Request, res: Response) {
        try {
            const id = req.params.id
             
            const response = await UserService.GetUserById(id)

            res.status(200).json(response)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async UpdateUser(req: Request, res: Response) {
        try {
            const id = req.params.id
            const data = req.body
             
            const response = await UserService.UpdateUser(id, data)

            res.status(200).json(response)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async DeleteUser(req: Request, res: Response) {
        try {
            const id = req.params.id
             
            const response = await UserService.DeleteUser(id)

            res.status(200).json(response)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}