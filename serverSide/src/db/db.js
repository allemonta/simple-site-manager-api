const mysql = require('mysql');
const config = require('../config')

var pool = mysql.createPool(config.db_settings)

const query = (queryString, callback) => {
    pool.getConnection((err, connection) => {
        if (err)
            callback(err, undefined)

        connection.query(queryString, (err, result, fields) => {
            connection.release()
            return callback(err, result)
        })
    })
}

const queryPromise = (queryString) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err)
                return resolve({err, result: undefined})
    
            connection.query(queryString, (err, result, fields) => {
                connection.release()
                return resolve({err, result})
            })
        })
    })     
}

const getSections = () => {
    let queryString = "SELECT * FROM sections";
    return queryPromise(queryString);
}

const getLinks = (idSection) => {
    let queryString = "SELECT l.*, s.title AS sectionTitle FROM links l, sections s WHERE l.sectionId = s.id";

    if (idSection) {
        queryString += " AND l.sectionId = " + idSection;
    }

    return queryPromise(queryString);
} 

const addLink = (title, path, classes, sectionId) => {
    let sqlString = "INSERT INTO links (title, path, classes, sectionId) VALUES ('#1', '#2', '#3', #4)"
    sqlString = sqlString.replace("#1", title)
    sqlString = sqlString.replace("#2", path)
    sqlString = sqlString.replace("#3", classes)
    sqlString = sqlString.replace("#4", sectionId)

    return queryPromise(sqlString);
}

module.exports = {
    query,
    queryPromise,
    getSections,
    getLinks,
    addLink
}