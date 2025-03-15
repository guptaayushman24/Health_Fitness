import { NextRequest, NextResponse } from "next/server";
import User_Schema from "../../Schema/user";
import connectToDatabase from "../../db/index";
export async function POST(req: NextRequest, res: NextResponse) {
  try {
    await connectToDatabase();
    const body = await req.json();
    const password = await User_Schema.findOne({
      Email: body.email
    })
    if (password == null) {
      return Response.json({
        'msg': "Please check the email address"
      })
    }
    if (body.password === password.Password) {
      return Response.json({
        'msg': 'User Found'
      })
    }
    return Response.json({
      'msg': 'Please check your password'
    })
  }
  catch (err) {
    return Response.json({
      'Response': err
    })
  }
}
