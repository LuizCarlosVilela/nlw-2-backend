import express from 'express';
import db from './database/connection';

import ClassesController from './controllers/ClassesController';

const routes = express.Router();
const classesControllers = new ClassesController();

routes.post('/classes', classesControllers.create);
routes.get('/classes', classesControllers.index);

routes.get("/schedule", async (request, response) => {
    const classes = await db('class_schedule').select('*');
    console.log(classes);
});

export default routes;