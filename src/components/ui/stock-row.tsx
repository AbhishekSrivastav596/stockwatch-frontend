"use client"

import { api } from "@/lib/api"
import { Button } from "@/components/ui/button"

export default function StockRow({ stock }: any) {
  const remove = async () => {
    await api.delete(`/watchlist/${stock.symbol}`)
  }

  return (
    <div className="flex justify-between items-center border p-3 rounded-lg">
      <div>
        <p className="font-semibold">{stock.symbol}</p>
        <p className="text-sm text-gray-500">{stock.name}</p>
      </div>

      <div className="text-right">
        <p>${stock.price}</p>
        <p className={stock.changePercent >= 0 ? "text-green-500" : "text-red-500"}>
          {stock.changePercent}%
        </p>
      </div>

      <Button variant="destructive" onClick={remove}>
        Remove
      </Button>
    </div>
  )
}
