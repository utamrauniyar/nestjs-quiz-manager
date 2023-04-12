import { EntityRepository, Repository } from "typeorm";
import { Quiz } from "../entites/quiz.entity";

@EntityRepository(Quiz)
export class QuizRepository extends Repository<Quiz>{

}