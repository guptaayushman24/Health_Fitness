import { NextRequest, NextResponse } from "next/server";
import User_Schema from "../../Schema/user";
import connectToDatabase from "../../db/index";
export async function POST(req: NextRequest, res: NextResponse) : Promise<NextResponse>{
  try {
    await connectToDatabase();
    const body = await req.json();
    const password = await User_Schema.findOne({
      Email: body.email
    })
    if (password == null) {
      return NextResponse.json({
        'msg': "Please check the email address"
      })
    }
    if (body.password === password.Password) {
      return NextResponse.json({
        'msg': 'User Found'
      })
    }
    return NextResponse.json({
      'msg': 'Please check your password'
    })
  }
  catch (err) {
    return NextResponse.json({
      'Response': err
    })
  }
}
