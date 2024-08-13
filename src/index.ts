import express, { Application, Request, Response } from "express";
import { connectdbMONGO } from "./config/mongodb-connect/db";
import { comments } from "./routes/commentsroutes/commentroutes";
import cors from "cors";

export const app: Application = express();
connectdbMONGO();
app.use(express.json());

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use("comments", comments);

app.get("/", (req: Request, res: Response) => {
  res.send("Api configurada Para Receber Comentários");
});
