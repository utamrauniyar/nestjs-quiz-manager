import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuizRepository } from '../repositories/quiz.repository';
import { CreateQuizDto } from '../dto/createQuiz.dto';
import { Quiz } from '../entities/quiz.entity';
import {
    IPaginationOptions,
    Pagination,
    paginate
} from 'nestjs-typeorm-paginate';

@Injectable()
export class QuizService {

    constructor(@InjectRepository(QuizRepository) private quizRepository: QuizRepository) { }


    async getAllQuiz(): Promise<Quiz[]> {
        return await this.quizRepository
            .createQueryBuilder('qr')
            .leftJoinAndSelect('qr.questions', 'qt')
            .getMany()
    }

    async paginate(options: IPaginationOptions): Promise<Pagination<Quiz>> {
        const qb = this.quizRepository.createQueryBuilder('q')
        qb.orderBy('q.id', 'DESC')

        return paginate<Quiz>(qb, options)
    }

    async getQuizById(id: number): Promise<Quiz> {
        return await this.quizRepository.findOne(
            id,
            {
                relations: ['questions', 'questions.options']
            }
        );
    }

    async createNewQuiz(quiz: CreateQuizDto) {
        return await this.quizRepository.save(quiz)
    }
}
