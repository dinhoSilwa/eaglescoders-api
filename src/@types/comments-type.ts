import type { Document } from "mongoose";

export interface Icomments extends Document {
  name: string;
  githubuser: string;
  email: string;
  comment: string;
  createdAt: Date;
  updatedAt: Date;
}
