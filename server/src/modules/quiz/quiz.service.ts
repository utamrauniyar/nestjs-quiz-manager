import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuizRepository } from './quiz.repository';
import { CreateQuizDto } from './dto/createQuiz.dto';

@Injectable()
export class QuizService {

    constructor(@InjectRepository(QuizRepository) private quizRepository: QuizRepository) { }


    getAllQuiz() {
        return [1, 2, 3]
    }


    async createNewquiz(quiz: CreateQuizDto) {
        return await this.quizRepository.save(quiz)
    }
}
