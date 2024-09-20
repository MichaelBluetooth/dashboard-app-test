import { Entity, Column, ManyToOne } from 'typeorm';
import { StandardEntity } from './base.entity';
import { Project } from './project.entity';
import { ProjectTemplate } from './project-template.entity';

export enum AttributeType {
    string = 'string',
    number = 'number',
    date = 'date',
    memo = 'memo',
    select = 'select'
}

export abstract class Attribute extends StandardEntity {
    @Column()
    name: string;

    @Column()
    label: string;

    @Column()
    type: string;

    @Column()
    required: boolean;
}

@Entity()
export class TemplateAttribute extends Attribute {
    @ManyToOne(() => ProjectTemplate, (p) => p.attributes)
    template: ProjectTemplate;
}

@Entity()
export class ProjectAttribute extends Attribute {
    @ManyToOne(() => Project, (p) => p.attributes)
    project: Project;

    @Column()
    stringValue: string;

    @Column()
    numberValue: number;

    @Column()
    dateValue: Date;
}