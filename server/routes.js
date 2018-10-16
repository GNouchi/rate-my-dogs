const api = require('./api');
const bp = require('body-parser');

module.exports = (app)=>{
    app.use(bp.json()); 
 
    app.get('/dogs', api.index)
    app.get('/dogs/:dogid', api.showDog)
    app.post('/dogs', api.newDog)
    app.delete('/dogs/:dogid', api.removeDog)
    app.put('/dogs/:dogid', api.updateDog)
    app.post('/dogs/ratings/:dogid', api.newRating)
    return app;
}