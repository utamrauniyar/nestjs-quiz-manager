import { EntityRepository, Repository } from "typeorm"
import { Option } from "../entites/option.entity";

@EntityRepository(Option)
export class OptionRepository extends Repository<Option> { }