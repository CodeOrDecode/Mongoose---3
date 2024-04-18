const express = require("express");
const mongoose = require("mongoose");
const server = express();
server.use(express.json());
const PORT = 3004;


mongoose.connect("mongodb://127.0.0.1:27017/ggggg")

const Userschema = mongoose.Schema({
    name: { type: String, unique: true },
    age: { type: Number, required: true },
    city: { type: String, enum: ["pune", "bangalore"] }
})

const Usermodel = mongoose.model("jjjj", Userschema);

server.post("/add", async (req, res) => {
    const getuser = req.body;
    try {
        await Usermodel.create(getuser);
        res.status(200).send("success");
    } catch (error) {
        console.log(error);
        res.status(404).send("error");
    }
})


server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})