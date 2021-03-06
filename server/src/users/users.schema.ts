import { Document, Schema } from 'mongoose';


export class AddUserDTO {
    readonly username: string;
    readonly admin: string;
    password: string;
    readonly email: string;
    salt: string;
    flag: string;
}

export interface User extends Document {
    username?: string;
    admin?: string;
    password?: string;
    email?: string;
    salt?: string;
    flag?: string;
}


export const UserSchema = new Schema({
    username: {
        type: String
    },
    admin: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    salt: {
        type: String
    },
    flag: {
        type: String
    }
});
