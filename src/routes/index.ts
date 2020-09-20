import express, { Request, Response, Router } from 'express'
import http from 'http';
const router: Router = express.Router();


router.get('/', (req: Request, res: Response) => {
    res.render('index')
})

router.get('/search', (req: Request, res: Response)=>{
    class Search {
        driverName:string
        constructor() {
            this.driverName = req.url
        }
        getData() {

        }
        giveData() {
            
        }
    }
})

export default router
