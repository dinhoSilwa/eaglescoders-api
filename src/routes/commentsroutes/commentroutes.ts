import { Router } from "express";
import { addAnewComment } from "../../controllers/commentscontrollers";


export const comments = Router();
comments.post("/send", addAnewComment)
