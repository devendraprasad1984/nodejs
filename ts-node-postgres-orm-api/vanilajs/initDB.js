import pg from 'pg'

const initDB = () => {
    return new pg.Client({
        user: 'dpadmin',
        host: 'localhost',
        database: 'postgres',
        password: 'admin',
        port: 5432,
    });
}
export default initDB
