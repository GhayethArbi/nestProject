import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema(/* created at , updated at*/ {timestamps: true})
export class User extends Document {
    
    @Prop({required:true})
    name:string;

    @Prop({required:true})
    email:string;

    @Prop({required:true})
    password:string;


}

export const UserShema = SchemaFactory.createForClass(User);