import mongoose from "mongoose";

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/tribes_unite";

let cached = (global as any)._mongoose;
if (!cached) {
  try {
    cached = (global as any)._mongoose = mongoose.connect(uri, {
      dbName: process.env.MONGODB_DB || "tribes_unite",
    });
  } catch (error) {
    console.warn("MongoDB connection failed, using fallback mode");
    cached = Promise.resolve();
  }
}

export const db = cached;
