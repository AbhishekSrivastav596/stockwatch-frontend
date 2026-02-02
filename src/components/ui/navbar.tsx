"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import ThemeToggle from "./theme-toggle"
import { Button } from "./button"

export default function Navbar() {
  const { data: session } = useSession()

  return (
    <nav className="flex items-center justify-between p-4 bg-background border-b border-border">
      <div className="text-xl font-bold">📈 MyStocks</div>

      <div className="flex items-center space-x-4">
        <ThemeToggle />

        {session?.user ? (
          <div className="flex items-center space-x-2">
            <span className="text-muted-foreground">{session.user.name}</span>
            <Button variant="outline" onClick={() => signOut()}>
              Logout
            </Button>
          </div>
        ) : (
          <Button variant="outline" onClick={() => signIn()}>
            Login
          </Button>
        )}
      </div>
    </nav>
  )
}
