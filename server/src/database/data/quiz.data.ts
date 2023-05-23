interface ISampleData {
    quizTitle: string;
    quizDescription: string;
    questions: Array<IQuestionData>;
}

interface IQuestionData {
    question: string;
    options: Array<{ text: string; isCorrect: boolean }>;
}

export const quizSampleData: Array<ISampleData> = [
    {
        quizTitle: 'Nest beginner level quiz',
        quizDescription:
            'In this quiz, you are going to be asked some basic questions which will target your knowledge of Nest',
        questions: [
            {
                question: 'How to put Nest applications in maintenance mode?',
                options: [
                    { text: 'nest artisan maintenance:on', isCorrect: false },
                    { text: 'nest artisan down', isCorrect: true },
                    { text: 'nest artisan maintenance:up', isCorrect: false },
                    { text: 'nest artisan maintenance:down', isCorrect: false },
                ],
            },
            {
                question: 'What is the role of Service provider?',
                options: [
                    {
                        text: 'They allow Nest to know about the packages which are present and how to bootstrap them',
                        isCorrect: true,
                    },
                    {
                        text: 'They allow Nest to provide services for individual modules',
                        isCorrect: false,
                    },
                ],
            },
        ],
    },
    {
        quizTitle: 'React Js beginner level quiz',
        quizDescription:
            'In this quiz, you are going to be asked some basic questions which will target your knowledge of React Js',
        questions: [
            {
                question: 'How to put Nest applications in maintenance mode?',
                options: [
                    { text: 'nest artisan maintenance:on', isCorrect: false },
                    { text: 'nest artisan down', isCorrect: true },
                    { text: 'nest artisan maintenance:up', isCorrect: false },
                    { text: 'nest artisan maintenance:down', isCorrect: false },
                ],
            },
        ],
    },
];