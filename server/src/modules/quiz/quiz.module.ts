import { Module } from '@nestjs/common';
import { QuizController } from './controllers/quiz.controller';
import { QuizService } from './services/quiz.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizRepository } from './repositories/quiz.repository';
import { QuestionControlller } from './controllers/question.controller';
import { QuestionService } from './services/question.service';
import { QuestionRepository } from './repositories/question.repository';
import { OptionRepository } from './repositories/option.repository';

@Module({
  imports: [TypeOrmModule.forFeature([QuizRepository, QuestionRepository, OptionRepository])],
  controllers: [QuizController, QuestionControlller],
  providers: [QuizService, QuestionService]
})
export class QuizModule { }
