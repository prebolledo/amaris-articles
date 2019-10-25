let mysql  = require('mysql')

let connection = mysql.createConnection({
  host     : process.env.MYSQL_HOST,
  user     : process.env.MYSQL_USER,
  password : process.env.MYSQL_PASSWORD,
  database : process.env.MYSQL_DB,
  queueLimit: 100,
})

const query = (q) => {
    return new Promise((resolve, reject) => { 
        connection.connect()     
        connection.query(q,function (err, results) {
            connection.end()
            if(err){
                reject(err)
            }else{
                resolve(results)
            }
        })
    })
}

export default { connection, query }
