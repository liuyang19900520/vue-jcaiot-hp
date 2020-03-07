import { Document, Schema } from 'mongoose';
import { LogEntry } from '@nestjs/common/interfaces/external/kafka-options.interface';


export class AddUserDTO {
    readonly username: string;
    readonly admin: boolean;
    readonly password: string;
    readonly userId: number;
}

export interface User extends Document {
    username?: string;
    admin?: boolean;
    password?: string;
    userId?: number;
}


export const UserSchema = new Schema({
    username: {
        type: String
    },
    admin: {
        type: Boolean
    },
    password: {
        type: String
    },
    userId: {
        type: Number
    }
});
