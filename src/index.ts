import express from "express";
import database from "./config/database"
import TaskRouter from "./routes/Task.routes";
import UserRouter from "./routes/User.routes";
import CategoryRouter from "./routes/Category.routes";
import cors from "cors"

const app = express();


// Middlewares
app.use(cors({}))
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use("/task", TaskRouter)
app.use("/user", UserRouter)
/*app.use("/Category", CategoryRouter)*/

// inicializa la base de datos

database.initialize()
.then(()=>{
  console.log("base de datos conectada")
})

app.get('/', (req, res) => {
    res.send('Hola, mundo!');
  });

app.post("/tasks", (req, res) => {
  res.send(req.body)}
)





export default app;