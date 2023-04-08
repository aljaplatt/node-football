import pg from 'pg'

// creating a connection pool 
const pool = new pg.Pool({
  user:"zwaldoei",
  host:"surus.db.elephantsql.com", 
  database: "zwaldoei", 
  password: "toZOJt1ML_cs7NZ2K6ekfpJWkM3NlHnj",
  port: 5432,
  ssl: {
        rejectUnauthorized: false
      }
})

export default function query(text, params) {
  // exposing pool.query method so we can use it elsewhere
  // using async/await not callback, promise returned from pool.query so await 
  // text passed into query is the sql string
  // params is   
  return pool.query(text, params)
  }

// import dotenv from 'dotenv';

// dotenv.config();

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false
//   }
// });
