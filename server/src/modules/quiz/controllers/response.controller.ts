import { Controller, Post } from "@nestjs/common";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { ApiTags } from "@nestjs/swagger";
import { events } from "src/common/constants/event.constants";
import { ResponseAddEvent } from "../events/response-add.event";


@Controller('response')
@ApiTags("Response")
export class ResponseController {

    constructor(private eventEmitter: EventEmitter2) { }
    @Post('')
    async handleQuestionResponse() {

        // insert data into response table
        console.log('This is inside the controller');

        const payload = new ResponseAddEvent()
        payload.userId = 1
        payload.opionId = 33



        this.eventEmitter.emit(events.RESPONSE_SUBMITTED, payload)

        return { message: 'Response Token' }
    }
}