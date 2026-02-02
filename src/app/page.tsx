"use client"

import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const { status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "authenticated") router.push("/dashboard")
  }, [status])

  return (
    <div className="h-screen flex items-center justify-center">
      <Button onClick={() => signIn("google")}>
        Sign in with Google
      </Button>
    </div>
  )
}
