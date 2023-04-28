import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateQuestionDto } from "../dto/createQuestion.dto";
import { QuestionService } from "../services/question.service";
import { Question } from "../entites/question.entity";
import { QuizService } from "../services/quiz.service";


@Controller('question')
export class QuestionControlller {
    constructor(
        private questionService: QuestionService,
        private quizService: QuizService
    ) { }

    @Post('')
    @UsePipes(ValidationPipe)
    async saveQuestion(@Body() question: CreateQuestionDto): Promise<Question> {
        const quiz = await this.quizService.getQuizById(question.quizId);

        return await this.questionService.createQuestion(question, quiz);
    }
}