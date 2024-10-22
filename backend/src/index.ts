import express from 'express'
import router from './routes/route';
import cors from 'cors'

const app = express();
const port = 8000;

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use('/api/v1', router)

app.listen(port, () => {
    console.log(`Server is Running at Port ${port}`)
})