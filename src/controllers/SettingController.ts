import {Request, Response} from "express"
import { SettingService } from "../services/SettingService";

class SettingController {

    async create(req: Request, res: Response){
        const {chat, username} = req.body

        const settingsService = new SettingService()

    try{
        const settings = await settingsService.create({chat, username})
    
        return res.json(settings)

        }catch(err){
            return res.status(400).json({
                message: err.message
            })
        }
    }

    async findByUserName(req: Request, res: Response){
        const { username } = req.params

        const settingsService = new SettingService()

        const settings = await settingsService.findByUserName(username)

        return res.json(settings)
    }

    async update(req: Request, res: Response){
        const { username } = req.params
        const { chat } = req.body

        const settingsService = new SettingService()

        const settings = await settingsService.update(username, chat)

        return res.json(settings)
    }

}

export {SettingController}