"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/ui/navbar";
import WatchlistTable from "@/components/ui/watchlist-table";

export default function Dashboard() {
  const session = useSession();
  const router = useRouter();
  console.log("Session data:", session);
  if (session.status === "unauthenticated") {
    router.push("/");
  }
  return (
    <div className="p-6 space-y-6">
      <Navbar />
      {session.status === "authenticated" && <WatchlistTable />}
    </div>
  );
}
