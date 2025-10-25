import { SignIn } from "@stackframe/stack";
import Link from "next/link";

export default function SignInPage(){
    return(
        <div 
        className="min-h-screen flex items items-center justify-center
        bg-gradient-to-br from-purple-100 to-purple-300 ">
            <div className="max-w-md w-full space-y-8 text-black">
             <SignIn/>
             <Link href="/" >Go Back Home</Link>
            </div>
        </div>
    )
}