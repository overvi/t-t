import NotificationIcon from "@/assets/images/notification-outline.svg?react";
import Button from "@/components/Button";
import type { ReactNode } from "react";

interface NotificationItemProps {
  title: string;
  description: ReactNode;
  time: string;
  date: string;
  actionLabel?: string;
  hasDot?: boolean;
}

const NotificationItem = ({
  title,
  description,
  time,
  date,
  actionLabel,
  hasDot,
}: NotificationItemProps) => {
  return (
    <div className="rounded-3xl bg-white p-5 shadow-nav">
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-3 basis-full">
          <div className="flex gap-3">
            <div className="flex shrink-0 size-14 items-center justify-center rounded-full bg-pattens-blue relative">
              {hasDot && (
                <span className="absolute  top-2 right-3 h-2 w-2 rounded-full bg-carnation" />
              )}
              <NotificationIcon />
            </div>
            <div className="flex flex-col w-full">
              <div className="flex items-center justify-between">
                <p className="text-[1rem] font-bold text-abbey ">{title}</p>
                <div className="flex flex-col text-sm text-manatee leading-relaxed">
                  <span>
                    {date} {time}
                  </span>
                </div>
              </div>
              <div className="text-sm mt-0.5 max-w-[35ch] text-manatee leading-relaxed text-right">
                {description}
              </div>
            </div>
          </div>
        </div>
      </div>

      {actionLabel && (
        <div className="mt-4 flex justify-end">
          <Button variant="helper" className="py-2.5! rounded-xl px-5!">
            {actionLabel}
          </Button>
        </div>
      )}
    </div>
  );
};

export default NotificationItem;
