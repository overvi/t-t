import { Outlet } from "react-router";
import Navbar from "@/components/Nav/Navbar";
import { NotificationsProvider } from "@/NotificationsContext";

export default function Layout() {
  return (
    <NotificationsProvider>
      <header>
        <Navbar />
      </header>

      <main className="bg-base flex flex-col flex-1">
        <Outlet />
      </main>
    </NotificationsProvider>
  );
}
