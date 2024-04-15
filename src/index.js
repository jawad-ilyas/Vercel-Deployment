import cors from "cors";
import app from "./app";

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
