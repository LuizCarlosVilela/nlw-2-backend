import express, { response } from 'express';

const app = express();
app.use(express.json());

app.get("/", (request, response) => {
    return console.log("Deus é mais");
});

app.listen(3333, () => console.log("Servidor no ar"));
