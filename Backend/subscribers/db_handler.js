var { pool } = require('../services/db');

/**
 * @function InsertAgenda this async function call the service to insert a new agenda into the database.
 * @param {*} req 
 * @param {*} res
 * @returns {true, false} depending if the register was inserted or not.
 */
function InsertAgenda(req, res) {
    var { id, name, agenda } = req.body;
    pool.query('SELECT * FROM insert_agenda($1, $2, $3);', [id, name, JSON.stringify(agenda)], err => {
        if (err) {
            console.log(err);
        }
        res.status(201).json({ status: 'success', message: 'Agenda added.' });
    });
}

/**
 * @function GetAgenda this function returns all agendas from the database.
 * @param {*} req 
 * @param {*} res 
 * @returns a json file with each agenda inside of db.
 */
function GetAgendas(req, res) {
    // * Call  function get all elements from database.
    pool.query('SELECT * FROM get_all_agendas()', (err, results) => {
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
 * @function GetAgenda this async function returns all votes from the database.
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
    GetAgendas,
    InsertAgenda,
    GetVotes
}