import { Schema, Document } from 'mongoose';

export interface WeatherRequest extends Document {
  city: string;
  response: any;
  createdAt: Date;
}

export const WeatherSchema = new Schema<WeatherRequest>({
  city: { type: String, required: true },
  response: { type: Object, required: true },
  createdAt: { type: Date, default: Date.now },
});
