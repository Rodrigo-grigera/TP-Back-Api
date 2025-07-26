import express from "express"
import cors from "cors";
import routeInstrumentos from "./Ruters/instrumentos.ruters";

const app = express();
app.use(express.json())
app.use(cors());

app.use("/instrumentos", routeInstrumentos);

app.listen(3000, () => {
    console.log("Server runnig on port 3000");
});