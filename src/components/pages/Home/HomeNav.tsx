import Button from "@/components/Button";
import NotificationIcon from "@/assets/images/notification.svg?react";
import MenuIcon from "@/assets/images/menu.svg?react";
import Wallet from "@/assets/images/wallet.svg?react";
import { Link } from "react-router";

const HomeNav = () => {
  return (
    <>
      <Button icon={<MenuIcon />}></Button>
      <div className="flex items-center gap-4">
        <Button
          as={Link}
          to={"/wallet"}
          className="relative"
          icon={
            <>
              <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500" />
              <Wallet />
            </>
          }
        ></Button>
        <Button
          as={Link}
          to={"/notifications"}
          icon={<NotificationIcon />}
        ></Button>
      </div>
    </>
  );
};

export default HomeNav;
