import express from 'express';
import db from './database/connection';
import convertHourToMinutes from './utils/convertHourToMinutos';

const routes = express.Router();

interface ScheduleItem {
    week_day: number,
    from: string,
    to: string
}

routes.post('/classes', async (request, response) => {
    const {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost,
        schedule
    } = request.body;

    const insertedUsersIds = await db('users').insert({
        name,
        avatar,
        whatsapp,
        bio,
    });

    const user_id = insertedUsersIds[0];

    const insertedClassesIds = await db('classes').insert({
        subject,
        cost,
        user_id,
    });

    const class_id = insertedClassesIds[0];

    const classSchedule = schedule.map( (item: ScheduleItem) => {

        return {
            class_id,
            week_day: item.week_day,
            from: convertHourToMinutes(item.from),
            to: convertHourToMinutes(item.to)
        }
    });

    await db('class_schedule').insert(classSchedule);
});

routes.get("/classes", async (request, response) => {
    const classes = await db('classes').select('*');
    console.log(classes);
});

routes.get("/schedule", async (request, response) => {
    const classes = await db('class_schedule').select('*');
    console.log(classes);
});

export default routes;