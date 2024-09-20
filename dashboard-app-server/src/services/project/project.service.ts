import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProjectAttribute, TemplateAttribute } from '../../entities/attribute.entity';
import { ProjectTemplate } from '../../entities/project-template.entity';
import { Project } from '../../entities/project.entity';

@Injectable()
export class ProjectService {

    constructor(
        // @InjectRepository(Project) private projectRepo: Repository<Project>,
        @InjectRepository(ProjectTemplate) private projectTemplateRepo: Repository<ProjectTemplate>
    ) { }

    async createProject(templateId?: number): Promise<Project> {
        const project = new Project();
        project.attributes = [];

        if (templateId) {
            const template: ProjectTemplate = await this.projectTemplateRepo
                .findOne({
                    where: { id: templateId },
                    relations: ['attributes']
                });
            if (template) {
                template.attributes.forEach((attr: TemplateAttribute) => {
                    const projectAttr = new ProjectAttribute();
                    projectAttr.name = attr.name;
                    projectAttr.label = attr.label;
                    projectAttr.type = attr.type;
                    projectAttr.required = attr.required;
                    project.attributes.push(projectAttr);
                });
            }
        }

        return project;
    }
}
