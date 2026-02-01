"use client"

import { signIn, useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { redirect } from "next/navigation"

export default function Home() {
  const { status } = useSession()

  if (status === "authenticated") redirect("/dashboard")

  return (
    <div className="h-screen flex items-center justify-center">
      <Button onClick={() => signIn("google")}>Sign in with Google</Button>
    </div>
  )
}
