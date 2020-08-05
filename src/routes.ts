import express from 'express';

import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();

const classesControllers = new ClassesController();
const connectionControllers = new ConnectionsController();


//Classes e professores
routes.post('/classes', classesControllers.create);
routes.get('/classes', classesControllers.index);

routes.post('/connections', connectionControllers.create);
routes.get('/connections', connectionControllers.index);



routes.get("/", async (request, response) => {
    return response.send('Deus é mais')
});

export default routes;