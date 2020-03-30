import { Document } from 'mongoose';

export interface Menu extends Document {
    readonly admin: string;
    readonly title: string;
    readonly link: string;
}