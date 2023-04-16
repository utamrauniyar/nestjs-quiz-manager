import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuizRepository } from '../repositories/quiz.repository';
import { CreateQuizDto } from '../dto/createQuiz.dto';
import { Quiz } from '../entites/quiz.entity';

@Injectable()
export class QuizService {

    constructor(@InjectRepository(QuizRepository) private quizRepository: QuizRepository) { }


    async getAllQuiz(): Promise<Quiz[]> {
        return await this.quizRepository.createQueryBuilder('qr')
            .leftJoinAndSelect('qr.questions', 'qt')
            .getMany()
    }

    async getQuizById(id: number): Promise<Quiz> {
        return await this.quizRepository.findOne(id, { relations: ['questions'] });
    }

    async createNewQuiz(quiz: CreateQuizDto) {
        return await this.quizRepository.save(quiz)
    }
}
