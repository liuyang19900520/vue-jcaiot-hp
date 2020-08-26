import { Document } from 'mongoose';

export interface Expert extends Document {
    readonly name: string;
    readonly picture: string;
    readonly detail: string;
    readonly updateTime: string;
}