
import {
    TypeOrmModuleAsyncOptions,
    TypeOrmModuleOptions
} from "@nestjs/typeorm";


export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
    useFactory: async (): Promise<TypeOrmModuleOptions> => {
        return {
            type: 'postgres',
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT),
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            migrations: [__dirname + '/../database/migration/*{.ts,.js'],
            cli: {
                migrationsDir: __dirname + '/../database/migrations'
            },
            extra: {
                charset: 'utf8mb4_unicode_ci'
            },
            synchronize: false,
            logging: true
        }
    }
};

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    migrations: [__dirname + '/../database/migration/*{.ts,.js'],
    cli: {
        migrationsDir: __dirname + '/../database/migrations'
    },
    extra: {
        charset: 'utf8mb4_unicode_ci'
    },
    synchronize: false,
    logging: true
}
