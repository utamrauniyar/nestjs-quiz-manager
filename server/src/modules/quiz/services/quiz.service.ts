import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuizRepository } from '../repositories/quiz.repository';
import { CreateQuizDto } from '../dto/createQuiz.dto';
import { Quiz } from '../entites/quiz.entity';

@Injectable()
export class QuizService {

    constructor(@InjectRepository(QuizRepository) private quizRepository: QuizRepository) { }


    getAllQuiz() {
        return [1, 2, 3]
    }

    async getQuizById(id: number): Promise<Quiz> {
        return await this.quizRepository.findOne(id, { relations: ['questions'] });
    }

    async createNewQuiz(quiz: CreateQuizDto) {
        return await this.quizRepository.save(quiz)
    }
}
