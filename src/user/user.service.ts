import { Injectable } from "@nestjs/common";

@Injectable()
export class UserServices{
    findAll(){
        return "Find All users"
    }
}