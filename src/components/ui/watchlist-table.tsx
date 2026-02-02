"use client"

import { useWatchlist } from "@/app/hooks/use-watchlist"
import StockRow from "@/components/ui/stock-row"
import AddStockDialog from "@/components/add-stock-dialog"
import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { useSession } from "next-auth/react"

export default function WatchlistTable() {
  const { data, isLoading } = useWatchlist()
  const { data: session } = useSession()

  if (isLoading)
    return <Skeleton className="h-40 w-full" />

  return (
    <Card className="space-y-4">
      <CardHeader>
        <CardTitle>My Watchlist</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {session?.user?.email && <AddStockDialog />}

        <div className="space-y-2">
          {data?.length ? (
            data.map((stock: any) => (
              <StockRow key={stock.symbol} stock={stock} />
            ))
          ) : (
            <div className="text-muted-foreground text-center py-4">
              No stocks added yet.
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
