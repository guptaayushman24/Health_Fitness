import mongoose, { Schema, Document, Model } from "mongoose";

// Define User Type
interface Dashboard extends Document {
  ExerciseType: string;
  ExerciseName: string;
  ExerciseBenifit: string;
  Duration:Number
}
const DashboarSchema = new mongoose.Schema({
    ExerciseType:{
        type:String,
        require:true
    },
    ExerciseName:{
        type:String,
        require:true
    },
    ExerciseBenifit:{
        type:String,
        require:true
    },
    Duration:{
        type:Number,
        require:true
    }
  
})
const Dashboar_Schema: Model<Dashboard> = mongoose.models.Dashboar_Schema || mongoose.model<Dashboard>("Dashboar_Schema", DashboarSchema);
export default Dashboar_Schema;
export{}