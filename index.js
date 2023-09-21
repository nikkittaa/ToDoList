import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;

var tasks = [[], []];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.post("/add", (req, res) => {
    var typeTask = req.body["choice"];
    
    if(typeTask === "home-list"){
        tasks[0].push(req.body.hometask);
    }
    else{
        tasks[1].push(req.body.worktask);
    }
    console.log(tasks);
    res.render("index.ejs", {task: tasks});
});
    

app.listen(port, ()=>{
    console.log("Server running sccuessfully on port 3000!");
})