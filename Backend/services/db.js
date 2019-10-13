var PG = require('pg');
// * Path to connect with postgres database. 
var CONNECTION_STRING = 'postgres://YourUserName:YourPassword@localhost:5432/YourDatabase';
// * Create a postgres client.
var CLIENT = new PG.Client(CONNECTION_STRING);

/**
 * @function GetAgendas get from database all agendas.
 * @returns a list with all registers.
 */
async function GetAgendas() {
    let listAgendas = [];
    // * Open a new connection.
    CLIENT.connect();

    // * Make a query.
    await client.query('SELECT * FROM get_all_agendas()', 50000)
        .then(res => {
            var data = res.rows;
            listAgendas = data;
            data.array.forEach(row => console.log(row));
        })
        .finally(() => {
            CLIENT.end();
        });
    return listAgendas;
}

async function InsertAgenda(agenda) {
    // * Open a new connection.
    let data = null;
    CLIENT.connect();
    await client.query(`SELECT * FROM insert_agenda(${agenda.id, agenda.name, agenda.agenda})`, 50000)
        .then(res => {
            data = res.rows;
        })
        .finally(() => {
            CLIENT.end();
        });
    return data;
}

module.exports = {
    InsertAgenda,
    GetAgendas
}