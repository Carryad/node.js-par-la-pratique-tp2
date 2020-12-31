const config = require('../config/env.config');

const UtilsRoute = require('./components/Utils/UtilsRoute');
const UserRoutes = require('./components/User/UserRoutes');

const router= (app) => {
    app.use(config.root_api, UtilsRoute);
    app.use(config.root_api, UserRoutes);
    app.use((req,res) => {
        res.status(404).json({error: 'Not Found'});
    });
};

module.exports = router;