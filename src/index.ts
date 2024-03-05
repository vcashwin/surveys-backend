import express from "express";
import surveyRoutes from "./routes/surveyRoutes";

const app = express();

app.use(express.json());
app.use("/surveys", surveyRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
