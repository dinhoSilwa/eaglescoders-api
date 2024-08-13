import { Router } from "express";
import { addAnewComment , getAllComments} from "../../controllers/commentscontrollers";

export const comments = Router();

comments.post("/send", addAnewComment)
comments.post("get", getAllComments)
