import { Controller, Get, Post } from "@nestjs/common";
import { BookmarkServices } from "./bookmark.service";

@Controller('bookmarks')
export class BookmarkController{
    constructor(private bookmarkServices:BookmarkServices){}

    @Get()
    findAll(){
          return this.bookmarkServices.findAll()
    }

    @Post()
    updateOne(){
        return this.bookmarkServices.updateOne()
    }

}