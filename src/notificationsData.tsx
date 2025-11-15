import type { ReactNode } from "react";
import { Link } from "react-router";

export interface NotificationData {
  id: number;
  title: string;
  description: ReactNode;
  time: string;
  date: string;
  actionLabel?: string;
  hasDot?: boolean;
}

export interface SupportData {
  id: number;
  title: string;
  description: ReactNode;
  time: string;
  date: string;
  actionLabel?: string;
}

export const notificationItems: NotificationData[] = [
  {
    id: 1,
    title: "خرید دوربین",
    description:
      "محمد انتظاری، شما دوربین ۳۶۰ درجه زاویه خریدید. پس از دریافت دوربین، می‌توانید مشخصات خود را روی نقشه ثبت کنید.",
    time: "21:10",
    date: "1403/05/19",
    hasDot: true,
  },
  {
    id: 2,
    title: "انتشار تور",
    description: (
      <p>
        محمد انتظاری، تور شما منتشر شد. <br />
        برای استفاده از آن به صفحه تورهای من مراجعه کنید.
      </p>
    ),
    time: "21:10",
    date: "1403/05/19",
    actionLabel: "مشاهده تور",
  },
  {
    id: 3,
    title: "انتشار تور",
    description: (
      <>
        محمد انتظاری ، تور شما به دلیل ... رد شد ، هزینه آن به کیف پول شما
        بازگشت داده شد . برای مشاهده تور{" "}
        <Link to="#" className="text-cerulean ">
          کلیک
        </Link>{" "}
        کنید
      </>
    ),
    time: "21:10",
    date: "1403/05/19",
  },
  {
    id: 4,
    title: "پایان اعتبار تور",
    description: (
      <>
        محمد انتظاری ، اعتبار تور شما تمام شد ، برای مشاهده تور{" "}
        <Link to="#" className="text-cerulean ">
          ضربه
        </Link>{" "}
        بزنید
      </>
    ),
    time: "21:10",
    date: "1403/05/19",
  },
  {
    id: 5,
    title: "خوش آمدید",
    description:
      "محمد امین عزیز خوش آمدید ، میتوانید از راهنمای‌اولیه شروع کنید",
    time: "21:10",
    date: "1403/05/19",
  },
];

export const supportItems: SupportData[] = [
  {
    id: 1,
    title: "پاسخ پشتیبانی",
    description: "پاسخ داده شده",
    time: "21:10",
    date: "امروز",
  },
  {
    id: 2,
    title: "بروزرسانی تیکت",
    description: "پاسخ داده شده",
    time: "20:45",
    date: "امروز",
  },
];
