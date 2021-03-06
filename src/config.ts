import * as dotenv from 'dotenv';
//DO NOT COMMIT YOUR .env FILE
dotenv.config({ path:'.env'});
const config = {
    serviceName: process.env.SERVICENAME || 'node typescript postgres app',
    port: Number(process.env.PORT) || 3000,
    loggerLevel: 'debug',
    db: {
        user: process.env.DB_USER || 'postgres',
        database: process.env.DB || 'mydb',
        password: process.env.DB_PASS || 'mtm102030',
        host: process.env.DB_HOST || 'localhost',
        port: Number(process.env.DB_PORT) || 5432,
        max: Number(process.env.DB_MAX_CLIENTS) || 20,
        idleTimeoutMillis: Number(process.env.DB_IDLE_TIMEOUT_MS) || 30000
    }
}

export = config;
