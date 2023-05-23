import {
    Body,
    Controller,
    DefaultValuePipe,
    Get,
    HttpCode,
    Param,
    ParseIntPipe,
    Post,
    Query,
    UseGuards,
    UsePipes,
    ValidationPipe
} from '@nestjs/common';
import { QuizService } from '../services/quiz.service';
import { CreateQuizDto } from '../dto/createQuiz.dto';
import { Quiz } from '../entities/quiz.entity';
import {
    ApiCreatedResponse,
    ApiOkResponse,
    ApiSecurity,
    ApiTags
} from '@nestjs/swagger';
import { ApiPaginatedResponse } from 'src/common/decorator/api_pagination.response';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { JwtAuthGuard } from 'src/modules/auth/jwt-auth.guard';
import { AdminRoleGuard } from 'src/modules/auth/admin-role.guard';
import { RolesGuard } from 'src/modules/auth/roles.guard';
import { Roles } from 'src/modules/auth/roles.decorator';

@ApiSecurity('bearer')
@UseGuards(JwtAuthGuard)
@ApiTags('Quiz')
@Controller('quiz')
export class QuizController {
    constructor(private quizService: QuizService) { }

    @Get('/')
    @ApiPaginatedResponse({ model: Quiz, description: 'List of quizes' })
    async getAllQuiz(
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 1,
    ): Promise<Pagination<Quiz>> {
        const options: IPaginationOptions = {
            limit,
            page,
        }
        return await this.quizService.paginate(options)
    }

    @Get('/:id')
    @ApiOkResponse({ description: 'Get a quiz by id', type: Quiz })
    async getQuizById(@Param('id', ParseIntPipe) id: number): Promise<Quiz> {
        return await this.quizService.getQuizById(id)
    }

    // @HttpCode(200)
    @ApiCreatedResponse({ description: 'The quiz that got created', type: Quiz })
    @UsePipes(ValidationPipe)
    @UseGuards(RolesGuard)
    @Roles('admin')
    @Post('/create')
    async createQuiz(@Body() quizData: CreateQuizDto) {
        return await this.quizService.createNewQuiz(quizData)
    }
}
