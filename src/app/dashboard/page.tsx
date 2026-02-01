"use client"

import Navbar from "@/components/ui/navbar"
import WatchlistTable from "@/components/ui/watchlist-table"

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <Navbar />
      <WatchlistTable />
    </div>
  )
}
