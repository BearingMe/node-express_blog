import mongoose from "mongoose";

export function connect(uri: string): void {
  mongoose
    .connect(uri)
    .then(() => console.log(`MongoDB connected`))
    .catch((err) => console.log(`MongoDB connection error: ${err}`));
}


