import pg from 'pg'


const pool = new pg.Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST, 
  database: process.env.PGDATABASE, 
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
  ssl: {
        rejectUnauthorized: false
      }
})

export default function query(text, params) {
  // exposing pool.query method so we can use it elsewhere
  // using async/await not callback, promise returned from pool.query so await 
  // text passed into query is the sql string
  // params is  form parameterised variables - sql injection
  return pool.query(text, params)
  }



// dotenv.config();

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false
//   }
// });
