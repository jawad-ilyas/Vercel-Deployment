import express from "express"


const app = express();




app.listen(8080, () => {

    console.log("app is listen")
})


app.get("/", (req, res) => {
    res.status(200).send("/ is listen ")

})