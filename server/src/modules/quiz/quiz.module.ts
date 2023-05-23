import { Module } from '@nestjs/common';
import { QuizController } from './controllers/quiz.controller';
import { QuizService } from './services/quiz.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizRepository } from './repositories/quiz.repository';
import { QuestionControlller } from './controllers/question.controller';
import { QuestionService } from './services/question.service';
import { QuestionRepository } from './repositories/question.repository';
import { OptionRepository } from './repositories/option.repository';
import { OptionController } from './controllers/option.controller';
import { OptionService } from './services/option.service';
import { UserModule } from '../user/user.module';
import { ResponseController } from './controllers/response.controller';
import { ResponseService } from './services/response.service';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [
        QuizRepository,
        QuestionRepository,
        OptionRepository
      ]
    ),
    UserModule
  ],
  controllers: [
    QuizController,
    QuestionControlller,
    OptionController,
    ResponseController
  ],
  providers: [
    QuizService,
    QuestionService,
    OptionService,
    ResponseService
  ]
})

export class QuizModule { }
