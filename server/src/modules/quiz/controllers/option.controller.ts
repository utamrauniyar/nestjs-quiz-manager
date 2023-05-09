import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { OptionService } from "../services/option.service";
import { QuestionService } from "../services/question.service";
import { CreateOptionDto } from "../dto/createOption.dto";
import { Option } from '../entities/option.entity';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from "@nestjs/swagger";

@ApiBearerAuth()
@ApiTags('Options')
@Controller('question/option')
export class OptionController {
    constructor(
        private optionService: OptionService,
        private questionService: QuestionService
    ) { }

    @Post('')
    @UsePipes(ValidationPipe)
    @ApiCreatedResponse({
        description: 'The option that got created',
        type: Option,
    })
    async saveOptionToQuestion(@Body() createOption: CreateOptionDto) {
        const question = await this.questionService.findQuestionById(createOption.questionId);
        const option = await this.optionService.createOption(createOption, question)

        return { question, createOption, option };
    }
}