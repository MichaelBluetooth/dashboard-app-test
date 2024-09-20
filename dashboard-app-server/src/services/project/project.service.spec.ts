import { Test, TestingModule } from '@nestjs/testing';
import { ProjectService } from './project.service';
import { Repository } from 'typeorm';
import { Project } from '../../entities/project.entity';
import { ProjectTemplate } from '../../entities/project-template.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

export type MockType<T> = {
  [P in keyof T]?: jest.Mock<{}>;
};

export const repositoryMockFactory: () => MockType<Repository<any>> = jest.fn(() => ({
  findOne: jest.fn(entity => entity),
  // ...
}));

fdescribe('ProjectService', () => {
  let service: ProjectService;
  let mockProjRepo: any;
  let mockTemplateRepo: any;

  beforeEach(async () => {
    mockTemplateRepo = {
      findOne: jest.fn()
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProjectService,
        { provide: getRepositoryToken(ProjectTemplate), useValue: mockTemplateRepo },
        // Repository<Project>,
        // Repository<ProjectTemplate>
      ],
    })
      .compile();

    service = module.get<ProjectService>(ProjectService);
    mockTemplateRepo = module.get(getRepositoryToken(ProjectTemplate));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new project', async () => {
    const project = await service.createProject();
    expect(project).toBeDefined();
    expect(project.attributes.length).toEqual(0);
  });

  it('should create a new project when given a non-existent template id', async () => {
    mockTemplateRepo.findOne.mockReturnValue(null);
    const project = await service.createProject(123);
    expect(project).toBeDefined();
    expect(project.attributes.length).toEqual(0);
  });

  it('should create a new project with all attributes in the given template', async () => {
    mockTemplateRepo.findOne.mockReturnValue({
      attributes: [{
        name: 'attr1',
        label: 'attr1',
        type: 'string'
      }]
    });
    const project = await service.createProject(123);
    expect(project).toBeDefined();
    expect(project.attributes.length).toEqual(1);
  });
});
