import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateTagsRequest } from 'src/models/create-tags.dto';
import { UpdateTagRequest } from 'src/models/update-tag.dto';
import { TagsService } from 'src/services/tags/tags.service';

@Controller('tags')
export class TagsController {
    constructor(private tagService: TagsService) { }

    @Get()
    getTags() {
        return this.tagService.getTags()
    }

    @Post()
    createTags(@Body() data: CreateTagsRequest) {
        return this.tagService.createTags(data);
    }    

    @Put(':id')
    updateTag(@Param() id: number, @Body() data: UpdateTagRequest) {
        return this.tagService.updateTag(id, data);
    }
}
