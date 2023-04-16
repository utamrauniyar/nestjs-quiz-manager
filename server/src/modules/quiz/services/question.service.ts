import { Injectable } from "@nestjs/common";
import { CreateQuestionDto } from "../dto/createQuestion.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { QuestionRepository } from "../repositories/question.repository";
import { Question } from "../entites/question.entity";
import { Quiz } from "../entites/quiz.entity";


@Injectable()
export class QuestionService {
    constructor(@InjectRepository(QuestionRepository)
    private questionRepository: QuestionRepository) { }

    async createQuestion(question: CreateQuestionDto, quiz: Quiz): Promise<Question> {

        const newQuestion = await this.questionRepository.save({

            question: question.question
        });

        quiz.questions = [...quiz.questions, newQuestion];
        await quiz.save();

        return newQuestion;

    }

    async findQuestionById(id: number): Promise<Question> {
        return await this.questionRepository.findOne(id, { relations: ['quiz', 'options'] })
    }
}