import Seen from "@/assets/images/seen.svg?react";
import SendMessage from "@/components/pages/Chat/SendMessage";

const Chat = () => {
  return (
    <div className="flex flex-col flex-1">
      <div className="pt-5 px-5 flex-1">
        <p className="text-center text-jumbo w-fit text-xs mx-auto">امروز</p>
        <div className="mt-5.5 max-w-[40ch]">
          <div className="bg-white  p-3.5 rounded-[1.125rem] rounded-ss-[5px]">
            <p className="text-abbey">
              سلام، دنبال یه آپارتمان یک خوابه توی منطقه‌ی زعفرانیه هستم.
              می‌تونی کمکم کنی؟
            </p>
          </div>
          <span className="w-fit text-jumbo text-xs mt-1 ms-auto  block">
            12:12
          </span>
        </div>
        <div className="mt-5.5 max-w-[40ch] ms-auto">
          <div className="bg-cerulean  p-3.5 rounded-[1.125rem] rounded-ee-[5px]">
            <p className="text-white">
              بله حتما ممنون. یه سوال دیگه داشتم، این آپارتمان نزدیک مترو هم
              هست؟
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Seen />
            <span className="w-fit text-jumbo text-xs mt-1 me-auto  block">
              12:12
            </span>
          </div>
        </div>
      </div>
      <SendMessage />
    </div>
  );
};

export default Chat;
