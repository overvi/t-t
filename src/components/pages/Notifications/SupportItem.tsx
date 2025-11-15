import type { ReactNode } from "react";
import NotificationIcon from "@/assets/images/support.svg?react";
import Button from "@/components/Button";
import { Link } from "react-router";

interface SupportItemProps {
  title: string;
  description: ReactNode;
  date: string;
  actionLabel?: string;
}

const SupportItem = ({
  title,
  description,
  date,
  actionLabel,
}: SupportItemProps) => {
  return (
    <Link to={"/chat"} className="rounded-3xl block bg-white p-5 shadow-nav">
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col basis-full gap-3">
          <div className="flex gap-3">
            <div className="flex shrink-0 text-shamrock size-14 items-center justify-center rounded-full bg-hummingbird">
              <NotificationIcon />
            </div>
            <div className="flex flex-col w-full">
              <div className="flex items-center  justify-between">
                <p className="text-[1rem] font-bold text-abbey ">{title}</p>
                <div className="flex flex-col text-sm text-manatee leading-relaxed">
                  <span>{date}</span>
                </div>
              </div>
              <div className="text-sm mt-2.5 max-w-[35ch] text-manatee leading-relaxed text-right">
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
    </Link>
  );
};

export default SupportItem;
