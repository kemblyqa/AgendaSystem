var { pool } = require('../services/db');

/**
 * @function InsertMinute async function call the service to insert a new minute into the database.
 * @param {*} req 
 * @param {*} res
 * @returns {true, false} depending if the register was inserted or not.
 */
function InsertMinute(req, res) {
    var { id, name, generals, agenda } = req.body;
    pool.query('SELECT * FROM insert_minute($1, $2, $3, 4$);', [id, name, generals, JSON.stringify(agenda)], err => {
        if (err) {
            console.log(err);
        }
        res.status(201).json({ status: 'success', message: 'Agenda added.' });
    });
}

/**
 * @function GetMinutes this function returns all agendas from the database.
 * @param {*} req 
 * @param {*} res 
 * @returns a json file with each agenda inside of db.
 */
function GetMinutes(req, res) {
    // * Call  function get all elements from database.
    pool.query('SELECT * FROM get_all_minutes()', (err, results) => {
        if (err) {
            console.log(err);
        }
        if (results !== undefined)
            res.status(200).json(results.rows);
        else
            res.status(200).json([]);
    });
}

/**
 * @function GetVotes this async function returns all votes from the database.
 * @param {*} req 
 * @param {*} res 
 * @returns a json file with each vote inside of db.
 */
function GetVotes(req, res) {
    pool.query('SELECT * FROM get_all_votes()', (err, results) => {
        if (err) {
            console.log(err);
        }
        if (results !== undefined)
            res.status(200).json(results.rows);
        else
            res.status(200).json([]);
    });
}

module.exports = {
    GetMinutes,
    InsertMinute,
    GetVotes
}