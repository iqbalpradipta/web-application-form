## Installation

Frontend
```bash
cd frontend
npm run dev
```
Backend
```bash
cd backend
add .env
npm run migrate
npm run start
```

.env
```
DATABASE_URL="mongodb+srv://guest:12345678A@app-db.psoyx.mongodb.net/App-DB"
```


## Route Backend

```
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
```

# Backend Testing with postman
## User
```
{
	"fullName" : "Iqbal Pradipta",
    "birth" : "Bekasi, 8 April 2000",
    "email" : "iqbalpradipta2@gmail.com",
    "telephone" : "081385626786",
    "agama" : "Islam"
}
```

## Education
```
URL: http://localhost:8000/api/v1/education/{userId}
```

```
{
    "formalEducation": "S1",
    "nameAndLocation": "Universitas Pelita Bangsa",
    "major": "Teknik Informatika",
    "yearOfEducation": "2018-2022"
}
```

## Progress
Tinggal Integrasi Backend dengan Frontend