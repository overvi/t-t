import Button from "@/components/Button";
import Notification from "@/assets/images/notification-2.svg?react";
import ArrowRight from "@/assets/images/arrow-right.svg?react";
import Support from "@/assets/images/support.svg?react";
import { useNotifications } from "@/NotificationsContext";
import { Link } from "react-router";

const NotificationNav = () => {
  const { activeTab, setActiveTab } = useNotifications();

  return (
    <div className="max-h-25.5 flex w-full">
      <Button
        as={Link}
        to={"/"}
        variant="ghost"
        className="p-0!"
        icon={<ArrowRight />}
      ></Button>
      <div className="flex *:basis-full basis-full items-center gap-3">
        <Button
          variant="ghost"
          className={`flex items-center p-0! flex-col ${
            activeTab === "notifications" ? "text-cerulean" : "text-manatee"
          }`}
          icon={
            <>
              <div className="relative">
                <p className="absolute -top-2 -right-5 flex size-5 items-center justify-center rounded-full bg-carnation text-center text-sm font-bold leading-0 text-white">
                  <span className="mt-0.5">1</span>
                </p>
                <Notification />
              </div>
            </>
          }
          onClick={() => setActiveTab("notifications")}
        >
          <p className="text-[1.125rem]">اعلان‌&zwnj;ها</p>
        </Button>
        <Button
          variant="ghost"
          className={`flex items-center p-0! tracking-[0] flex-col relative ${
            activeTab === "support" ? "text-cerulean" : "text-manatee"
          }`}
          icon={<Support />}
          onClick={() => setActiveTab("support")}
        >
          <p className="text-[1.125rem]">پشتیبانی</p>
        </Button>
      </div>
    </div>
  );
};

export default NotificationNav;
