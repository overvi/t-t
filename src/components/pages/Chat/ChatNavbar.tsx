import Button from "@/components/Button";
import { Link } from "react-router";
import ArrowRight from "@/assets/images/arrow-right.svg?react";

const ChatNavbar = () => {
  return (
    <div className="flex items-center w-full justify-between">
      <div className="flex items-center  gap-3">
        <Button
          as={Link}
          to={"/notifications"}
          variant="ghost"
          className="p-0!"
          icon={<ArrowRight />}
        ></Button>
        <div className="flex flex-col">
          <p className="font-bold text-ship-gray text-[1.125rem]">
            مشکل در سایت
          </p>
          <p className="mt-0.5 text-cerulean text-sm">در انتظار پاسخ</p>
        </div>
      </div>
      <Button variant="outline" className="py-3!">
        بستن تیکت
      </Button>
    </div>
  );
};

export default ChatNavbar;
