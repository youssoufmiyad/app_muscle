// const initSqlJs = require('sql.js');

// const SQL = await initSqlJs();

// export const testDB = () => {


//     // Create a database
//     const db = new SQL.Database("db/test.sqlite");
//     // NOTE: You can also use new SQL.Database(data) where
//     // data is an Uint8Array representing an SQLite database file

//     let sqlstr = "CREATE TABLE hello (a int, b char); \
// INSERT INTO hello VALUES (0, 'hello'); \
// INSERT INTO hello VALUES (1, 'world');";
//     db.run(sqlstr);
// }