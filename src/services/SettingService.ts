import { getCustomRepository, Repository } from "typeorm";
import { Setting } from "../entities/Setting";
import { SettingRepository } from "../repositories/SettingRepository";

interface ISettingCreate {
    chat: boolean;
    username: string;
}

class SettingService{
    private settingsRepository: Repository<Setting>

    constructor(){
        this.settingsRepository = getCustomRepository(SettingRepository)
    }
    
    async create({ chat, username } : ISettingCreate){

        const userAlredyExists =  await this.settingsRepository.findOne({
            username
        })
        
        if(userAlredyExists){
            throw new Error("Usuário já existente!")
        }

        const settings = this.settingsRepository.create({
            chat,
            username
        })
    
        await this.settingsRepository.save(settings);

        return settings
    }

    async findByUserName(username: string){
        const settings = await this.settingsRepository.findOne({
            username
        })
        return settings
    }

    async update(username: string, chat: boolean){
       await this.settingsRepository.createQueryBuilder()
        .update(Setting)
        .set({chat})
        .where("username = :username", {
            username
        }).execute()
    }
}

export { SettingService}