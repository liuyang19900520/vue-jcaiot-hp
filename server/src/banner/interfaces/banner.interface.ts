import { Document } from 'mongoose';

export interface Banner extends Document {
    readonly lang: string;
    readonly banner: string;
}