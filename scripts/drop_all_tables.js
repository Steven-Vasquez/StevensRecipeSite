require('dotenv').config(); // Ensure this is at the top to load environment variables

const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL
});

(async () => {
  try {
    await client.connect();

    // Get all table names in the public schema
    const res = await client.query(`
      SELECT tablename
      FROM pg_tables
      WHERE schemaname = 'public'
    `);

    // Drop each table
    for (const row of res.rows) {
      await client.query(`DROP TABLE IF EXISTS public.${row.tablename} CASCADE`);
      console.log(`Dropped table ${row.tablename}`);
    }
  } catch (err) {
    console.error('Error dropping tables:', err);
  } finally {
    await client.end();
  }
})();