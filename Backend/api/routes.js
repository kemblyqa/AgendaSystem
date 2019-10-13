var DB_SERVICE = require('../subscribers/db_handler');

module.exports.set = APP => {
    // Get all agendas into database.
    APP.get('/agendas',DB_SERVICE.GetAgendas);
    // Insert a new agenda into database.
    APP.post('/new-agenda', DB_SERVICE.InsertAgenda);
}