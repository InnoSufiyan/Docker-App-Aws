import express, { json } from "express"

const app = express()

app.use(express.json())

const users = []

app.get('/health', (req, res) => {
    res.json({
        status: true,
        message: "Application is working fine"
    })
})

app.get('/users', (req, res) => {
    res.json({
        status: true,
        users: users
    })
})

app.post("/users", (req, res) => {
    users.push(req.body)
    res.json({
        status: true,
        message: "User added successfully"
    })
})

app.listen(3000, () => {
    console.log("application is running on port 3000")
})