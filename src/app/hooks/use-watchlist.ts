import { useQuery } from "@tanstack/react-query"
import { api } from "@/lib/api"

export const useWatchlist = () =>
  useQuery({
    queryKey: ["watchlist"],
    queryFn: async () => {
      const res = await api.get("/watchlist")
      return res.data
    },
    refetchInterval: 30000
  })
