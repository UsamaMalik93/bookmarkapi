import { Injectable } from "@nestjs/common";

@Injectable()
export class BookmarkServices{
    findAll(){
        return "Find all bookmarks called"
    }

    updateOne(){
        return "what to update I'm here to help"
    }
}