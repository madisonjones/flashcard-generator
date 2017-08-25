var mysql = require("mysql")

var connection = mysql.creatConnection({
    host: "localhost",
    port: 3306,

    user: "root",
    password: " ",
    database: "music_db"
});

connection.connect(function(err) {
    if (err) throw err
    console.log("connected as id " + connection.threadId);

    connection.query("Select * from music_table", function(err,res) {
        if (err) throw err
        console.log(res)
    })
})