import { Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AttributeType, TemplateAttribute } from 'src/entities/attribute.entity';
import { ProjectTemplate } from 'src/entities/project-template.entity';
import { Project } from 'src/entities/project.entity';
import { Tag } from 'src/entities/tag.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StartupService implements OnApplicationBootstrap {
    private readonly logger = new Logger(StartupService.name);

    constructor(
        @InjectRepository(Project) private projectRepo: Repository<Project>,
        @InjectRepository(ProjectTemplate) private projectTemplateRepo: Repository<ProjectTemplate>
    ) { }

    async onApplicationBootstrap() {
        this.logger.log('Application bootstrapping');

        const projectCount = await this.projectRepo.count();
        if (projectCount === 0) {
            this.logger.log('Seeding test projects');

            const science = new Tag();
            science.name = 'Science';
            const math = new Tag();
            math.name = 'Math';

            const project1 = new Project();
            project1.name = 'Test Project 1';
            project1.tags = [science, math];

            const project2 = new Project();
            project2.name = 'Test Project 2';
            project2.tags = [math];

            const project3 = new Project();
            project3.name = 'Test Project 3';

            await this.projectRepo.save([project1, project2, project3]);

            this.logger.log('Seeding test projects complete');
        }

        const templateCount = await this.projectTemplateRepo.count();
        if(templateCount === 0) {
            this.logger.log('Seeding test templates');

            const template = new ProjectTemplate();
            template.name = 'Template 1';
            template.attributes = [
                new TemplateAttribute(),
                new TemplateAttribute()
            ];
            template.attributes[0].name = 'stringAttribute';
            template.attributes[0].label = 'String Attribute';
            template.attributes[0].type = AttributeType.string;
            template.attributes[0].required = false;
            template.attributes[1].name = 'numberAttribute';
            template.attributes[1].label = 'Number Attribute';
            template.attributes[1].type = AttributeType.number;
            template.attributes[1].required = false;

            await this.projectTemplateRepo.save([template]);

            this.logger.log('Seeding test templates complete');
        }
    }
}
