import { Entity, Column, ManyToMany, OneToMany } from 'typeorm';
import { StandardEntity } from './base.entity';
import { Tag } from './tag.entity';
import { ProjectAttribute } from './attribute.entity';

@Entity()
export class Project extends StandardEntity {
    @Column()
    name: string;

    @Column({ nullable: true })
    description?: string;

    @ManyToMany(() => Tag, (tag) => tag.projects, { cascade: ['insert'] })
    tags?: Tag[];

    @OneToMany(() => ProjectAttribute, (pa) => pa.project)
    attributes: ProjectAttribute[];
}