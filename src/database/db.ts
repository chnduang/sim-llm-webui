import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import 'dotenv/config';
import * as schema from '@/database/schema/users';

const postgresUrl = process.env.DATABASE_URL!;
console.log('post', postgresUrl);
const queryClient = postgres(postgresUrl);

export const db = drizzle({ client: queryClient, schema });

// const users = db.query.usersTable.findMany();
