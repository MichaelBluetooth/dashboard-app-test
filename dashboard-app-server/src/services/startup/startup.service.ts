import { Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from 'src/entities/project.entity';
import { Tag } from 'src/entities/tag.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StartupService implements OnApplicationBootstrap {
    private readonly logger = new Logger(StartupService.name);

    constructor(@InjectRepository(Project) private projectRepo: Repository<Project>) { }

    async onApplicationBootstrap() {
        this.logger.log('Application bootstrapping');

        const projectCount = await this.projectRepo.count();
        if (projectCount === 0) {
            this.logger.log('Seeding test data');

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

            this.logger.log('Seeding test data complete');
        }
    }
}
