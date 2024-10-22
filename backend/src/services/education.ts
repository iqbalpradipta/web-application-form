import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default new class EduacationService {
    async CreateEducation(id: string, data: Prisma.EducationCreateInput) {
        try {
            const dataEducation = await prisma.education.create({
                data: {
                    ...data,
                    user: {
                        connect: {id: id}
                    }
                }
            })
    
            return {
                data: dataEducation,
                messages: "Success create Education"
            }
        } catch (error) {
            throw error
        }
    }

    async GetAllEducation() {
        try {
            const dataEducation = await prisma.education.findMany()

            return {
                data: dataEducation,
                messages: "Success get All Education"
            }            
        } catch (error) {
            throw error
        }
    }

    async GetEducationById(id: string) {
        try {
            const dataEducation = await prisma.education.findUnique({
                where: {
                    id: id
                },
            })
    
            return {
                data: dataEducation,
                messages: "Success get Education"
            }            
        } catch (error) {
            throw error
        }
    }

    async UpdateEducation(id: string, data: Prisma.EducationUpdateInput) {
        try {
            const dataEducation = await prisma.education.update({
                where: {
                    id: id
                },
                data: data
            })
    
            return {
                data: dataEducation,
                messages: "Success Update Education"
            }
        } catch (error) {
            throw error
        }
    }

    async DeleteEducation(id: string) {
        try {
            const dataEducation = await prisma.education.delete({
                where: {
                    id: id
                },
            })

            return {
                data: dataEducation,
                messages: "Success Delete Education"
            }    
        } catch (error) {
            throw error
        }
    }
}