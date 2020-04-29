import * as mongoose from 'mongoose';

export const MenuSchema = new mongoose.Schema({
  admin: String,
  title: String,
  link: String,
  icon: String,
});