import * as mongoose from 'mongoose';

export const ExpertSchema = new mongoose.Schema({
  name: String,
  picture: String,
  detail: String,
  updateUser: String,
  updateTime: Date,
});