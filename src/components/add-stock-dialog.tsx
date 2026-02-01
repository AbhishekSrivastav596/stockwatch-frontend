"use client"

import { useState } from "react"
import { api } from "@/lib/api"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import {
  Dialog,
  DialogContent,
  DialogTrigger
} from "./ui/dialog"

export default function AddStockDialog() {
  const [symbol, setSymbol] = useState("")

  const add = async () => {
    await api.post("/watchlist", { symbol })
    setSymbol("")
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Stock</Button>
      </DialogTrigger>

      <DialogContent className="space-y-4">
        <Input
          placeholder="AAPL"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
        />
        <Button onClick={add}>Add</Button>
      </DialogContent>
    </Dialog>
  )
}
