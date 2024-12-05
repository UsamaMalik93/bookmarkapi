import { Module } from "@nestjs/common";
import { UsersController } from "./user.controller";
import { UserServices } from "./user.service";

@Module({
    controllers:[UsersController],
    providers:[UserServices]
})
export class UserModule{}