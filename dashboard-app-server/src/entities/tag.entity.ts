import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
import { StandardEntity } from './base.entity';
import { Project } from './project.entity';

@Entity()
export class Tag extends StandardEntity {
  @Column()
  name: string;

  @ManyToMany(() => Project, (project) => project.tags)
  @JoinTable()
  projects: Project[];
}