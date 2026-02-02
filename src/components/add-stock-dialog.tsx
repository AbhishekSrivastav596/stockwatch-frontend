"use client"

import { useState } from "react"
import { useSession } from "next-auth/react"
import { api } from "@/lib/api"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { useQueryClient } from "@tanstack/react-query"

export default function AddStockDialog() {
  const queryClient = useQueryClient()
  const { data: session } = useSession()

  const [symbol, setSymbol] = useState("")
  const [name, setName] = useState("")
  const [open, setOpen] = useState(false)

  const add = async () => {
    if (!session?.user?.email) return

    await api.post("/watchlist", {
      symbol: symbol.toUpperCase(),
      name,
      email: session.user.email,
    })

    setSymbol("")
    setName("")
    setOpen(false)
    queryClient.invalidateQueries({ queryKey: ["watchlist"] })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Add Stock</Button>
      </DialogTrigger>

      <DialogContent className="space-y-4">
        <Input
          placeholder="AAPL"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
        />
        <Input
          placeholder="Apple Inc."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button onClick={add}>Add</Button>
      </DialogContent>
    </Dialog>
  )
}