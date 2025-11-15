import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

type NotificationsTab = "notifications" | "support";

interface NotificationsContextValue {
  activeTab: NotificationsTab;
  setActiveTab: (tab: NotificationsTab) => void;
}

const NotificationsContext = createContext<NotificationsContextValue | undefined>(
  undefined,
);

export const NotificationsProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [activeTab, setActiveTab] = useState<NotificationsTab>("notifications");

  return (
    <NotificationsContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </NotificationsContext.Provider>
  );
};

export const useNotifications = () => {
  const context = useContext(NotificationsContext);

  if (!context) {
    throw new Error(
      "useNotifications must be used within a NotificationsProvider",
    );
  }

  return context;
};

