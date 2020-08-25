import { Document } from 'mongoose';

export interface Enterprise extends Document {
    readonly name: string;
    readonly picture: string;
    readonly detail: string;
    readonly address: string;
    readonly updateTime: string;
}