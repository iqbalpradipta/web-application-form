import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default new class UserService {
    async CreateUser(data: Prisma.UserCreateInput) {
        try {
            const dataUser = await prisma.user.create({
                data
            })
    
            return {
                data: dataUser,
                messages: "Success create User"
            }
        } catch (error) {
            throw error
        }
    }

    async GetAllUser() {
        try {
            const dataUser = await prisma.user.findMany({
                include: {
                    education: true
                }
            })

            return {
                data: dataUser,
                messages: "Success get All User"
            }            
        } catch (error) {
            throw error
        }
    }

    async GetUserById(id: string) {
        try {
            const dataUser = await prisma.user.findUnique({
                where: {
                    id: id
                },
                include: {
                    education: true
                },
            })
    
            return {
                data: dataUser,
                messages: "Success get User"
            }            
        } catch (error) {
            throw error
        }
    }

    async UpdateUser(id: string, data: Prisma.UserUpdateInput) {
        try {
            const dataUser = await prisma.user.update({
                where: {
                    id: id
                },
                data: data
            })
    
            return {
                data: dataUser,
                messages: "Success Update User"
            }
        } catch (error) {
            throw error
        }
    }

    async DeleteUser(id: string) {
        try {
            const dataUser = await prisma.user.delete({
                where: {
                    id: id
                },
            })

            return {
                data: dataUser,
                messages: "Success Delete User"
            }    
        } catch (error) {
            throw error
        }
    }
}