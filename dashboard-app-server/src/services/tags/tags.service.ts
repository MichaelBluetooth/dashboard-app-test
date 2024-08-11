import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from 'src/entities/tag.entity';
import { CreateTagsRequest } from 'src/models/create-tags.dto';
import { UpdateTagRequest } from 'src/models/update-tag.dto';
import { Repository } from 'typeorm';

@Injectable()
export class TagsService {
    private readonly logger = new Logger(TagsService.name);

    constructor(
        @InjectRepository(Tag) private tagsRepo: Repository<Tag>
    ) { }

    getTags(): Promise<Tag[]>{
        return this.tagsRepo.find()
    }

    async updateTag(id: number, data: UpdateTagRequest): Promise<Tag> {
        this.logger.debug(`Updating tag [${id}] with ${JSON.stringify(data)}`)
        const tag = await this.tagsRepo.findOneBy({ id });
        if (tag) {
            tag.name = data.name;
            this.tagsRepo.save(tag);
            return tag;
        } else {
            this.logger.warn('Tag not found');
            return null;
        }
    }

    async createTags(data: CreateTagsRequest): Promise<Tag[]> {
        this.logger.debug(`Creating tags: ${JSON.stringify(data?.tags)}`);
        const tags = data.tags.map(t => {
            const tag = new Tag();
            tag.name = t;
            return tag;
        });
        await this.tagsRepo.insert(tags);
        return tags;
    }
}
