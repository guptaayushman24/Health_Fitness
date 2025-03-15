import mongoose, { Schema, Document, Model } from "mongoose";

// Define User Type
interface IUser extends Document {
  name: string;
  email: string;
  Password: string;
  role: string;
}
const UserSchema = new mongoose.Schema({
    Name:{
        type:String,
        require:true
    },
    Email:{
        type:String,
        require:true
    },
    Password:{
        type:String,
        require:true
    },
    NormalUser:{
        type:String,
        enum:['Normal User','Trainer'],
        default:'Normal User'

    }
})
const User_Schema: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
export default User_Schema;
export{}