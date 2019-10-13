var AGENDA = require('../models/agenda');
var DB = require('../services/db');

/**
 * @function InsertAgenda this async function call the service to insert a new agenda into the database.
 * @param {*} req 
 * @param {*} res
 * @returns {true, false} depending if the register was inserted or not.
 */
async function InsertAgenda(req, res) {
    // * Create a new agenda object.
    let agenda = new AGENDA(req.body.id, req.body.name, req.body.agenda);
    // * Call function to insert a new element into database.
    let status = await DB.InsertAgenda(agenda);
    // * Validate if was inserted.
    if (status) {
        res.status(200).send({ 'status': true });
    } else {
        res.status(400).send({ 'status': false });
    }
}

/**
 * @function GetAgenda this async function returns all agendas from the database.
 * @param {*} req 
 * @param {*} res 
 * @returns a json file with each agenda inside of db.
 */
async function GetAgendas(req, res) {
    // * Call  function get all elements from database.
    let dataReceived = await DB.GetAgendas();
    res.status(200).send(dataReceived);
}

module.exports = {
    GetAgendas,
    InsertAgenda
}