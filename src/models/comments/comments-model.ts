import { Schema, model } from "mongoose";
import type { Icomments } from "../../@types/comments-type";

export const commentsSchema = new Schema(
  {
    name: { type: String, required: true },
    githubuser: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const CommentsModel = model<Icomments>("eagle-comments", commentsSchema);
