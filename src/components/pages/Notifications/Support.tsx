import { useState } from "react";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import SupportItem from "./SupportItem";
import { supportItems } from "@/notificationsData";
import Pen from "@/assets/images/pen.svg?react";

const Support = () => {
  const [isNewTicketOpen, setIsNewTicketOpen] = useState(false);

  return (
    <>
      {supportItems.map((item) => (
        <SupportItem key={item.id} {...item} />
      ))}
      <Button
        icon={<Pen />}
        variant="helper"
        className="font-bold shadow-toggle fixed bottom-9 right-5 py-4.5! rounded-[1.125rem]! px-8! flex items-center gap-1.5 text-[1.125rem]"
        onClick={() => setIsNewTicketOpen(true)}
      >
        تیکت جدید
      </Button>

      <Modal
        isOpen={isNewTicketOpen}
        onClose={() => setIsNewTicketOpen(false)}
        title="ارتباط با پشتیبانی"
      >
        <form
          dir="rtl"
          className="space-y-6"
          onSubmit={(event) => {
            event.preventDefault();
            setIsNewTicketOpen(false);
          }}
        >
          <div className="flex flex-col gap-1">
            <label
              htmlFor="ticket-title"
              className="font-bold text-abbey text-right"
            >
              موضوع
            </label>
            <input
              id="ticket-title"
              type="text"
              className="rounded-[1.125rem] h-14 placeholder:text-sm placeholder:text-manatee mt-1.5 bg-aqua-haze px-4 py-3 text-right text-sm outline-none border border-athens-gray"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="ticket-message"
              className="font-bold text-abbey text-right"
            >
              توضیحات
            </label>
            <textarea
              id="ticket-message"
              className="h-32 placeholder:text-sm placeholder:text-manatee resize-none mt-1.5 rounded-[1.125rem] bg-aqua-haze px-4 py-3 text-right text-sm outline-none border border-athens-gray"
              placeholder="متن توضیحات خود را وارد کنید..."
            />
          </div>

          <Button
            className="mt-2 w-full font-bold rounded-3xl bg-cerulean py-3 text-[1rem] text-white border-0"
            type="submit"
          >
            ارسال
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default Support;
