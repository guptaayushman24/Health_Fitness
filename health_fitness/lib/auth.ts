import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import GitHubProvider from "next-auth/providers/github";
export const NEXT_AUTH = ({
    // What we will pass here we will pass providers here how we are doing authentication
    providers: [
        CredentialsProvider({
            name: 'Email',
        // Here we will write the field which we expect from user at the time of signin and which are require for the authentication
        credentials: {
                Email: { label: "Email", type: "text", placeholder: "Enter your Email" },
                password: { label: "Password", type: "password" ,placeholder:"Enter your Password"},
            },
  
            async authorize(credentials: any) {
                // Ensure credentials are provided
                if (!credentials.email || !credentials.password) {
                    return null;
                }
            
                console.log("Credentials received:", credentials);
            
                try {
                    // Make a POST request to the Next.js API route
                    const response = await axios.post("http://localhost:3000/api/signin", {
                        email: credentials.email,
                        password: credentials.password,
                    });
            
                    console.log("Response from server:", response);
            
                    // If user is authenticated, return their details
                    if (response.data) {
                        return response.data; // Ensure API returns user details
                        
                    } else {
                        return null; // Return null if authentication fails
                    }
                } catch (err) {
                    console.error("Error during authentication:", err);
                    return null;
                }
            },
            
            
             
        })
        
       
    ],
    secret:process.env.NEXTAUTH_SECRET,
    // Creating the JWT route
    callbacks: {
        jwt: async ({ user, token }: any) => {
        if (user) {
            token.email = user.email;
            token.name = user.name;
        }
        return token;
        },
      session: ({ session, token, user }: any) => {
          if (session.user) {
              session.user.email = token.email,
              session.user.name = token.name
          }
          return session
      }
    },
  }
);


  
  
  