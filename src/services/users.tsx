'use server';

import { db } from '@/database/db';

export const getUsers = async () => {
  const users = await db.query.usersTable.findMany();
  return users;
};
