"use client"

import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, } from "@/components/ui/card"
import { Loader2 } from "lucide-react"

export default function Home() {
  const { status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard")
      
    }
  }, [status, router])

  if (status === "loading") {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 className="w-6 h-6 animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md shadow-lg border-border">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-2xl font-bold">
             StockWatch
          </CardTitle>
          <CardDescription>
            Track your favorite stocks in one place
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button
            className="w-full"
            size="lg"
            onClick={() => signIn("google")}
          >
            Continue with Google
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
