import express from "express";
const PORT = 5000;

const app = express();

app.get("/",(req,res) => {
    res.json({message: "App is running !!!!!!!!!!!"});
});

app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);
})

