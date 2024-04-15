import cors from "cors";
import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.status(200).send("/ is listening");
});

app.get("/api/v1", (req, res) => {
    res.status(200).send("request to api version for deployments");
});

export default app;


app.use(cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"]
}));

app.options("*", cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"]
}));

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});

app.on('error', (error) => {
    console.log("Error in connection ", error);
});
