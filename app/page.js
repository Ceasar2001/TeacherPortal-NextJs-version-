"use client"

import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import { useEffect } from "react";

export default function Home(){
  useEffect(() => {
    redirect('/api/auth/login?post_login_redirect_url=/dashboard')
  }, [])
    return(
      <div>
          
      </div>
    );
}
