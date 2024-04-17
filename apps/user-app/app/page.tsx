// "use client"
import { signIn, signOut, useSession } from "next-auth/react";
import { Appbar } from "@repo/ui/appbar";
import { authOptions } from "./lib/auth";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

export default async function Page() {
  const session = await getServerSession(authOptions);
  if(session.user){
    redirect("/dashboard");
  }
  else{
    redirect("api/auth/signin")
  }
  
}
