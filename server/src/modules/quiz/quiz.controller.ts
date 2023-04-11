import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/createQuiz.dto';

@Controller('quiz')
export class QuizController {
    constructor(private readonly quizService: QuizService) { }

    @Get('/')
    getAllQuiz() {
        return this.quizService.getAllQuiz()
    }

    @HttpCode(200)
    @UsePipes(ValidationPipe)
    @Post('/create')
    async createQuiz(@Body() quizData: CreateQuizDto) {
        return await this.quizService.createNewquiz(quizData)
    }
}
