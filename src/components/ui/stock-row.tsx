"use client"

import { useSession } from "next-auth/react"
import { useQueryClient } from "@tanstack/react-query"
import { api } from "@/lib/api"
import { Button } from "@/components/ui/button"

export default function StockRow({ stock }: any) {
  const { data: session } = useSession()
  const queryClient = useQueryClient()

const remove = async () => {
  if (!session?.user?.email || !stock?.symbol) return

  await api.delete(`/watchlist/${stock.symbol}`, {
    params: { email: session.user.email },
  })

  queryClient.invalidateQueries({ queryKey: ["watchlist"] })
}


  return (
    <div className="flex justify-between items-center border p-3 rounded-lg">
      <div>
        <p className="font-semibold">{stock.symbol}</p>
        <p className="text-sm text-gray-500">{stock.name}</p>
      </div>

      <div className="text-right">
        <p>${stock.price}</p>
        <p
          className={
            stock.change >= 0 ? "text-green-500" : "text-red-500"
          }
        >
          {stock.change}%
        </p>
      </div>

      <Button variant="destructive" onClick={remove}>
        Remove
      </Button>
    </div>
  )
}
