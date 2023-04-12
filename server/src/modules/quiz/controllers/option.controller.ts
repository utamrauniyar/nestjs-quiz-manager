import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { OptionService } from "../services/option.service";
import { QuestionService } from "../services/question.service";
import { CreateOptionDto } from "../dto/createOption.dto";


@Controller('question/option')
export class OptionController {
    constructor(
        private optionService: OptionService,
        private questionService: QuestionService
    ) { }


    @Post('')
    @UsePipes(ValidationPipe)
    saveOptionToQuestion(@Body() createOptionDto: CreateOptionDto) {
        return createOptionDto;
    }
}