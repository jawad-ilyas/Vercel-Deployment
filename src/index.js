
import cors from "cors"
import { app } from "./app"
app.use(cors({
    origin: "*",
    credential: true,
    methods: ["GET", "POST", "PUT", "DELETE"]
}))
try {
    app.listen(8080, () => {

        console.log("app is listen")
    })
} catch (error) {

    console.log("error into connection ", error)
}