const sqlite = require('sqlite');
const path = require('path')
const dbConn = sqlite.open(path.resolve(__dirname, '../banco.sqlite'), { Promise });

const init = async()=>{
       const db = await dbConn;
      // await db.run('drop table dadosProf');
    //    const user = await db.run(
    //        `create table users(id INTEGER PRIMARY KEY, user TEXT NOT NULL);
    //        `);
    await db.run(`
   insert into users(user) values('José Ronaldo')`);
       
   //console.log(user);
}
//init();
module.exports = dbConn;