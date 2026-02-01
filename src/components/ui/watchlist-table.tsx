"use client"

import { useWatchlist } from "../../app/hooks/use-watchlist"
import StockRow from "@/components/ui/stock-row"
import AddStockDialog from "@/components/add-stock-dialog"
import { Skeleton } from "@/components/ui/skeleton"

export default function WatchlistTable() {
  const { data, isLoading } = useWatchlist()

  if (isLoading)
    return <Skeleton className="h-40 w-full" />

  return (
    <div className="space-y-4">
      <AddStockDialog />

      <div className="space-y-2">
        {data?.map((stock: any) => (
          <StockRow key={stock.symbol} stock={stock} />
        ))}
      </div>
    </div>
  )
}
