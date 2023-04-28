import { Body, Controller, Get, HttpCode, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { QuizService } from '../services/quiz.service';
import { CreateQuizDto } from '../dto/createQuiz.dto';
import { Quiz } from '../entites/quiz.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Quiz')
@Controller('quiz')
export class QuizController {
    constructor(private quizService: QuizService) { }

    @Get('/')
    async getAllQuiz(): Promise<Quiz[]> {
        return await this.quizService.getAllQuiz()
    }

    @Get('/:id')
    async getQuizById(@Param('id', ParseIntPipe) id: number): Promise<Quiz> {
        return await this.quizService.getQuizById(id)
    }

    @HttpCode(200)
    @UsePipes(ValidationPipe)
    @Post('/create')
    async createQuiz(@Body() quizData: CreateQuizDto) {
        return await this.quizService.createNewQuiz(quizData)
    }
}
