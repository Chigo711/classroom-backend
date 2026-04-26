import express from 'express';
import "dotenv/config";
import cors from "cors";

const PORT = process.env.PORT || 4000;


const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Classroom Backend API");
});


app.listen(PORT, () => {
    console.log(`Server connected successfully at http://localhost:${PORT}`)
})
