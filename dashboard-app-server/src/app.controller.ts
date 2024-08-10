import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';

@Controller()
export class AppController {
  constructor(@InjectRepository(Project) private projectRepo: Repository<Project>) { }

  @Get('test')
  getHello(): Promise<Project[]> {
    return this.projectRepo.createQueryBuilder('proj')
      .leftJoinAndSelect('proj.tags', 'tag')
      .getMany();
  }
}
