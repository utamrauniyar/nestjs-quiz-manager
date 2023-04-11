import { Module } from '@nestjs/common';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizRepository } from './quiz.repository';

@Module({
  imports: [TypeOrmModule.forFeature([QuizRepository])],
  controllers: [QuizController],
  providers: [QuizService]
})
export class QuizModule { }
