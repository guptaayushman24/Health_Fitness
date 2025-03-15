import { NextRequest, NextResponse } from "next/server";
import Dashboar_Schema from "@/app/Schema/dashboard";
import  connectToDatabase  from "../../db/index";
export async function POST(req:NextRequest,res:NextResponse){
    try{
        await connectToDatabase(); 
        const body = await req.json();
        const dashboard =  new Dashboar_Schema({
            ExerciseType:body.exercisetype,
            ExerciseName:body.exercisename,
            ExerciseBenifit:body.exercisebenifit,
            Duration:body.duration
          });
          await dashboard.save();

          return Response.json({
            'Response':body
          })

        
    }
    catch(err){
        return Response.json({
            'msg':err
        })
    }
}
