// routes/crypto_routes.js

module.exports = function(app, db) {
    app.post('/crypto', (req, res) => {
        res.send('Hello');
    });
};