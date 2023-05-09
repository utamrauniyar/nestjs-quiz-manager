import {
    BaseEntity,
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn
} from "typeorm";
import { Question } from "./question.entity";
import { ApiProperty } from "@nestjs/swagger";


@Entity('options')

export class Option extends BaseEntity {

    @ApiProperty({ description: 'Primary key as Option ID', example: 1 })
    @PrimaryGeneratedColumn()
    id: number

    @ApiProperty({ description: 'The actual option', example: 'Owl' })
    @Column({ type: 'varchar' })
    text: string;

    @ApiProperty({ description: 'Whether option is correct', example: true })
    @Column({ type: 'boolean' })
    isCorrect: boolean;

    @ManyToOne(() => Question, question => question.options)
    question: Question
}