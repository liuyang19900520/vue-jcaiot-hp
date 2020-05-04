import * as mongoose from 'mongoose';

export const PostSchema = new mongoose.Schema({
  title: String,
  content: String,
  updateTime: String,
  mainPic: String,
  summary: String,
});