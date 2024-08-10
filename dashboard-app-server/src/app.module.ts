import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from "path"

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StartupService } from './services/startup/startup.service';
import { Project } from './entities/project.entity';
import { Tag } from './entities/tag.entity';

const root: string = path.resolve(__dirname, "..")

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      synchronize: true,
      autoLoadEntities: true,
      database: `${root}/data/db.sqlite`,
      logging: true
    }),
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '../../dashboard-app-client/dist/dashboard-app-client/browser'),
    }),
    TypeOrmModule.forFeature([Project, Tag])
  ],
  controllers: [AppController],
  providers: [AppService, StartupService],
})
export class AppModule { }