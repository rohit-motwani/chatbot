const express = require("express")
const app = express()
const path=require('path') 
const PORT = process.env.PORT || 5000;

const static_path=path.join(__dirname,"../public");
app.use(express.static(static_path));

app.get("", (req, res) => {
    res.render('index');
})
app.get("*", (req, res) => {
    console.log("Error page")
})
app.listen(PORT, () => {
    console.log(`Listening to the ${PORT}`);
})