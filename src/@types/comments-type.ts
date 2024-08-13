import type { Document } from "mongoose";

export interface Icomments extends Document {
  name: string;
  email: string;
  comment: string;
  avatar?: string;
  githubuser?: string;
  isOfensive?: boolean;
}
