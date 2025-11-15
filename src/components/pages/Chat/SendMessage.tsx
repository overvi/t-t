import Button from "@/components/Button";
import Share from "@/assets/images/share.svg?react";
import Send from "@/assets/images/send.svg?react";

const SendMessage = () => {
  return (
    <form className="bg-white flex *:basis-full  gap-2.5 py-6.5 px-5">
      <Button
        type="button"
        className="max-w-14"
        icon={<Share />}
        variant="solid"
      ></Button>
      <div className="flex flex-col gap-1">
        <input
          id="ticket-title"
          type="text"
          placeholder="نوشتن پیام..."
          className="rounded-[1.125rem] self-stretch h-full placeholder:text-sm placeholder:text-manatee  bg-aqua-haze px-4 py-3 text-right text-sm outline-none border border-athens-gray"
        />
      </div>
      <Button
        type="submit"
        className="max-w-14"
        icon={<Send />}
        variant="solid"
      ></Button>
    </form>
  );
};

export default SendMessage;
