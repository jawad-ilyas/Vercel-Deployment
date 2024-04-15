import { app } from "./src/app"

try {
    app.listen(8080, () => {

        console.log("app is listen")
    })
} catch (error) {

    console.log("error into connection " , error)
}