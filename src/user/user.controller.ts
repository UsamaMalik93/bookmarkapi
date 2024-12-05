import { Controller, Get } from "@nestjs/common";
import { UserServices } from "./user.service";

@Controller('users')
export class UsersController{
    constructor(private userServices:UserServices){}
    @Get()
    findAll(){
        return this.userServices.findAll()
    }
}