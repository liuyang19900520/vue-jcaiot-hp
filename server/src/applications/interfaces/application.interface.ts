import { Document } from 'mongoose';

export interface Application extends Document {
  readonly _id: string;
  readonly name: string;
  readonly type: string;
  readonly email: string;
  readonly profile: string;
}