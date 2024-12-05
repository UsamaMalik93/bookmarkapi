import { Module } from "@nestjs/common";
import { BookmarkController } from "./bookmark.controller";
import { BookmarkServices } from "./bookmark.service";

@Module({
    controllers:[BookmarkController],
    providers:[BookmarkServices]
})
export class bookMarkModule{}