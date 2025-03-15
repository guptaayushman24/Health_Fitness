'use server'
import User_Schema from "../Schema/user";
import  connectToDatabase  from "../db/index";
export default async function  signup(name:string,email:string,password:string,normal_user:string) {
   try{
      await connectToDatabase();
    const newUser = new User_Schema({
        Name:name,
        Email:email,
        Password:password,
        role: normal_user, 
      });

      const savedUser = await newUser.save();
    console.log("User Registered Successfully:", savedUser);
    return savedUser;
   }
   catch(err){
     return err;
   }
}
