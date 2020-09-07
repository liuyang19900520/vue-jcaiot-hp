import { Document } from 'mongoose';

export interface Banner extends Document {
    readonly lang: string;
    readonly banner: string;
    readonly content:string;
    readonly updateUser: string;
    readonly updateTime: string;
}