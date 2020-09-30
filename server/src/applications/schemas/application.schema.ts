import * as mongoose from 'mongoose';

export const ApplicationSchema = new mongoose.Schema({
  id: String,
  name: String,
  type: String,
  email: String,
  profile: String,
});