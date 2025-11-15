import Button from "@/components/Button";
import Plus from "@/assets/images/plus.svg?react";
import { Link } from "react-router";
import ArrowRight from "@/assets/images/arrow-right.svg?react";

const WalletNav = () => {
  return (
    <div className="w-full">
      <div className="flex items-center w-full justify-between">
        <div className="flex items-center  gap-3">
          <Button
            as={Link}
            to={"/"}
            variant="ghost"
            className="p-0!"
            icon={<ArrowRight />}
          ></Button>
          <p className="font-bold text-ship-gray text-[1.125rem]">کیف پول</p>
        </div>
      </div>
      <div className="mt-11 flex items-center w-full justify-center flex-col">
        <p className="font-bold text-[1.625rem] text-ship-gray">150,000,000</p>
        <p className="text-sm text-manatee font-bold">موجودی (تومان)</p>
        <Button variant="helper" className="px-12! mt-4" icon={<Plus />}>
          افزودن موجودی
        </Button>
      </div>
    </div>
  );
};

export default WalletNav;
