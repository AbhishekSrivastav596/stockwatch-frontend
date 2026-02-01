"use client"

import { signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-xl font-bold">StockWatch</h1>
      <Button onClick={() => signOut()}>Logout</Button>
    </div>
  )
}
