import { Schema, model } from "mongoose";
import type { Icomments } from "../../@types/comments-type";

export const commentsSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    comment: { type: String, required: true },
    avatar: { type: String, required: false },
    githubuser: { type: String, required: false },
    isOfensive: { type: Boolean, required: false },
  },
  {
    timestamps: true,
  }
);

export const CommentsModel = model<Icomments>("eagle-comments", commentsSchema);
