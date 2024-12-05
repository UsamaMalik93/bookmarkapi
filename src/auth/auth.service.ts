import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService{
    signin(){
        return {message: "This is Sigin function which is called"}
    }

    signup(){
        return "This is signup function which is called"
    }
}