import { Schema, model, models } from "mongoose";

const SubscriberSchema = new Schema({
  email: { type: String, required: true, unique: true, index: true },
  source: { type: String, default: "landing" },
  tags: { type: [String], default: [] },
  confirmed: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now, index: true },
  ip: String,
  meta: Schema.Types.Mixed,
});

export const Subscriber = models.Subscriber || model("Subscriber", SubscriberSchema);
