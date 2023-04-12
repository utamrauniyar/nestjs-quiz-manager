import { EntityRepository, Repository } from "typeorm";
import { Question } from "../entites/question.entity";

@EntityRepository(Question)
export class QuestionRepository extends Repository<Question>{

}