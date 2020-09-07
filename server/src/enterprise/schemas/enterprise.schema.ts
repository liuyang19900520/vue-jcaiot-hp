import * as mongoose from 'mongoose';

export const EnterpriseSchema = new mongoose.Schema({
  name: String,
  picture: String,
  detail: String,
  address: String,
  updateUser: String,
  updateTime: Date,
});