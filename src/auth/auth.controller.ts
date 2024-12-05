import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController{
    constructor(private authService:AuthService){}

    //POST auth/signup
    @Post('signup')
    signup(){
        return this.authService.signup()
    }

    //POST auth/signin
    @Post("signin")
    signin(){
        return this.authService.signin()
    }
   
}
//the constructor is responsible for dependency injection, a core concept in Nestjs that allows the framework to manage and provide 
//instances of required services & class components like controllers, services or modules.
//This injected AuthService can now be used within the AuthController to handle authentication related logic comming from auth.service.ts file.

