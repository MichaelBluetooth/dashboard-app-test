import { Entity, Column, OneToMany } from 'typeorm';
import { StandardEntity } from './base.entity';
import { TemplateAttribute } from './attribute.entity';

@Entity()
export class ProjectTemplate extends StandardEntity {
    @Column()
    name: string;

    @OneToMany(() => TemplateAttribute, (pa) => pa.template, { cascade: ['insert', 'remove'] })
    attributes: TemplateAttribute[];
}