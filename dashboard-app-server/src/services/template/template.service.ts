import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectTemplate } from 'src/entities/project-template.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TemplateService {
    constructor(
        @InjectRepository(ProjectTemplate) private projectTemplateRepo: Repository<ProjectTemplate>
    ) { }

    getTemplates(): Promise<ProjectTemplate[]> {
        return this.projectTemplateRepo.find();
    }

    getTemplate(id: number): Promise<ProjectTemplate> {
        return this.projectTemplateRepo.findOne({
            where: {id: id},
            relations: ['attributes']
        });
    }
}
