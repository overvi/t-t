import { useNotifications } from "@/NotificationsContext";
import NotificationItem from "@/components/pages/Notifications/NotificationItem";
import Support from "@/components/pages/Notifications/Support";
import { notificationItems } from "@/notificationsData";

const Notifications = () => {
  const { activeTab } = useNotifications();

  return (
    <div className="px-5 py-4 space-y-4">
      {activeTab === "notifications" ? (
        <>
          {notificationItems.map((item) => (
            <NotificationItem key={item.id} {...item} />
          ))}
        </>
      ) : (
        <Support />
      )}
    </div>
  );
};

export default Notifications;
