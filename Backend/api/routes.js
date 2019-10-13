var DB_SERVICE = require('../subscribers/db_handler');

module.exports.set = APP => {
    // Get all agendas from database.
    APP.get('/', (req, res) => { res.send('Server running successful'); });
    APP.get('/agendas', DB_SERVICE.GetAgendas);
    // Insert a new agenda into database.
    APP.post('/newagenda', DB_SERVICE.InsertAgenda);
    // Get all votes from database.
    APP.get('/votes', DB_SERVICE.GetVotes);
}