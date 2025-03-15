import { NextRequest, NextResponse } from "next/server";
import User_Schema from "../../Schema/user";
import  connectToDatabase  from "../../db/index";
export async function POST(req:NextRequest,res:NextResponse){
    try{
        await connectToDatabase(); 
        const body = await req.json();
        const newUser = new User_Schema({
            Name:body.name,
            Email:body.email,
            Password:body.password,
            role: body.role_bases, 
          });
          const savedUser = await newUser.save();
          console.log(savedUser);
         savedUser.save(body);
         return NextResponse.json({
            'name':body.name
         })
        // return NextResponse.redirect(new URL('/mainpage'))
        
    }
    catch(err){
        return Response.json({
            'msg':err
        })
    }
}
