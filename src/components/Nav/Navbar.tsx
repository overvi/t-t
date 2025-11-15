import { useLocation } from "react-router";
import HomeNav from "@/components/pages/Home/HomeNav";
import NotificationNav from "@/components/pages/Notifications/NotificationNav";
import ChatNavbar from "../pages/Chat/ChatNavbar";
import WalletNav from "../pages/Wallet/WalletNav";

const Navbar = () => {
  const { pathname } = useLocation();

  let navContent = null;

  if (pathname === "/") navContent = <HomeNav />;
  else if (pathname.startsWith("/notifications"))
    navContent = <NotificationNav />;
  else if (pathname.startsWith("/chat")) navContent = <ChatNavbar />;
  else if (pathname.startsWith("/wallet")) navContent = <WalletNav />;

  return (
    <nav className="bg-white min-h-25 shadow-nav px-5 py-5.5 flex items-center justify-between">
      {navContent}
    </nav>
  );
};

export default Navbar;
