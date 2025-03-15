'use client'
import { redirect, useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react';
import { AuthAction } from 'next-auth';
import { NEXT_AUTH } from '@/lib/auth'
import NextAuth from "next-auth";
export default function SigninButton() {
    return (
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Signin</button>
    )
}