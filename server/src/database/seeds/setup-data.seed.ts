import { Connection, getManager } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import { quizSampleData } from "../data/quiz.data";
import { Quiz } from "../../modules/quiz/entities/quiz.entity";
import { Question } from "../../modules/quiz/entities/question.entity";
import { Option } from "../../modules/quiz/entities/option.entity";


export class SetupData implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<void> {
        console.log('quizSampleData : ', quizSampleData);
        await getManager().query('SET foreign_key_checks = 0')
        await getManager().query('SET TRUNCATE quizes')
        await getManager().query('SET TRUNCATE questions')
        await getManager().query('SET TRUNCATE options')
        await getManager().query('SET foreign_key_checks = 1')

        for (let i = 0; i < quizSampleData.length; i++) {
            const { quizTitle, quizDescription, questions } = quizSampleData[i]

            const quiz = new Quiz();
            quiz.title = quizTitle;
            quiz.description = quizDescription;
            await quiz.save()

            for (let j = 0; j < questions.length; j++) {
                const { question, options } = questions[j];

                const quest = new Question();
                quest.question = question;
                quest.quiz = quiz;
                await quest.save()


                for (let k = 0; k < options.length; k++) {
                    const { isCorrect, text } = options[k];
                    const opt = new Option();
                    opt.isCorrect = isCorrect;
                    opt.text = text;
                    opt.question = quest;
                    await opt.save();
                }
            }
        }

    }
}