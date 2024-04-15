import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.status(200).send("/ is listening");
});

app.get("/api/v1", (req, res) => {
    res.status(200).send("request to api version for deployments");
});

export default app;
