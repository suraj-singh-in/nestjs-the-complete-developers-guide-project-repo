// Libraries
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

// Controllers
import { AppController } from './app.controller';

// Services
import { AppService } from './app.service';

// Module
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';

// Entities
import { User } from './users/user.entity';
import { Report } from './reports/report.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [User, Report],
      synchronize: true,
    }),
    UsersModule,
    ReportsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
