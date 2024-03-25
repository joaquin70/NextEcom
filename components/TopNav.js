"use client";
import Link from 'next/link';
import {useSession,signOut} from "next-auth/react";



export default function TopNav() {
    const {data,status} = useSession();
   //  console.log(data,status);


 return (
    <nav className="nav shadow p-2 justify-content-between mb-3">
    <Link className="nav-link" href="/">
    🛒 NEXTCOM
    </Link>


   {status === "authenticated" ? (
    <>
     <Link className="nav-link" href="/dashboard/user">
     {data?.user.name}
     </Link>
    <a className="nav-link pointer" onClick={()=> signOut({callbackUrl:"/login"})}>
        Logout
    </a>
    </>
   ): (
    <div className="d-flex">
    <Link className="nav-link" href="/login">
    Login
    </Link>
    <Link className="nav-link" href="/register">
    Register
    </Link>
    </div>
   )}

    </nav>
    );
   }
   