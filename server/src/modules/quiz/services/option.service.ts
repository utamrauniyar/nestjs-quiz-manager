import { Injectable } from "@nestjs/common";
import { OptionRepository } from "../repositories/option.repository";
import { InjectRepository } from "@nestjs/typeorm";


@Injectable()
export class OptionService {
    constructor(
        @InjectRepository(OptionRepository)
        private optionRepository: OptionRepository
    ) { }
}