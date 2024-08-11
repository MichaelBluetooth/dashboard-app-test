import { Entity, Column, ManyToMany } from 'typeorm';
import { StandardEntity } from './base.entity';
import { Tag } from './tag.entity';

@Entity()
export class Project extends StandardEntity {
    @Column()
    name: string;

    @Column({ nullable: true })
    description?: string;

    @ManyToMany(() => Tag, (tag) => tag.projects, { cascade: ['insert'] })
    tags?: Tag[];
}