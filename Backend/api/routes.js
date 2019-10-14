var DB_SERVICE = require('../subscribers/db_handler');

module.exports.set = APP => {
    // Get all agendas from database.
    APP.get('/', (req, res) => { res.send('Server running successful'); });
    APP.get('/minutes', DB_SERVICE.GetMinutes);
    // Insert a new agenda into database.
    APP.post('/newminute', DB_SERVICE.InsertMinute);
    // Get all votes from database.
    APP.get('/votes', DB_SERVICE.GetVotes);
}