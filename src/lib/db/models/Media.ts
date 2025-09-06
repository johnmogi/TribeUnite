import { Schema, model, models } from "mongoose";

const MediaSchema = new Schema({
  type: { type: String, enum: ["image", "video"], required: true, index: true },
  title: { type: String, required: true },
  description: String,
  thumbUrl: { type: String, required: true },
  mediaUrl: { type: String, required: true },
  tags: { type: [String], default: [] },
  published: { type: Boolean, default: true, index: true },
  createdAt: { type: Date, default: Date.now, index: true },
  priority: { type: Number, default: 0 },
});

export const Media = models.Media || model("Media", MediaSchema);
