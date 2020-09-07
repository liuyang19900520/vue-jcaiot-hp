import * as mongoose from 'mongoose';

export const BannerSchema = new mongoose.Schema({
  lang: String,
  banner: String,
  content: String,
  updateUser: String,
  updateTime: Date,
});