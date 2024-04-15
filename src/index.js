import express from "express"


const app = express();







app.get("/", (req, res) => {
    res.status(200).send("/ is listen ")

})
app.get("/api/v1", (req, res) => {
    res.status(200).send("requrest to api version for deployments ")

})
import cors from "cors"
app.use(cors())

try {
    app.listen(8080, () => {

        console.log("app is listen")
    })
} catch (error) {

    console.log("error into connection " , error)
}