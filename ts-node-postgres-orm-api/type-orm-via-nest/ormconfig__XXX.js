"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'dpadmin',
    password: 'admin',
    database: 'postgres',
    entities: ["dist/**/*.entity.{ts,js}"],
    migrations: ['migrations/*.js'],
    synchronize: true,
};
// export const config: ConnectionOptions = {
//     type: 'postgres',
//     host: process.env.DB_HOST,
//     port: parseFloat(process.env.DB_PORT),
//     username: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE,
//     entities: [__dirname + '/../**/*.entity{.ts,.js}'],
//     migrations: ['dist/database/migrations/*.js'],
//     synchronize: true,
// };
