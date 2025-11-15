import { useState } from "react";
import Search from "@/assets/images/search.svg?react";
import Close from "@/assets/images/close-black.svg?react";
import Button from "@/components/Button";
import Inc from "@/assets/images/inc.svg?react";
import Dec from "@/assets/images/dec.svg?react";

type WalletFilter = "all" | "increase" | "decrease";

const filterOptions: { value: WalletFilter; label: string }[] = [
  { value: "all", label: "همه" },
  { value: "increase", label: "افزایش" },
  { value: "decrease", label: "کاهش" },
];

const Wallet = () => {
  const [activeFilter, setActiveFilter] = useState<WalletFilter>("all");
  const [searchValue, setSearchValue] = useState("");

  const handleClearSearch = () => {
    setSearchValue("");
  };

  return (
    <div className="mt-7.5 px-5">
      <div className="flex items-center gap-1">
        {filterOptions.map((filter) => {
          const isActive = activeFilter === filter.value;

          return (
            <button
              key={filter.value}
              className={`border-0 cursor-pointer font-bold px-5 py-2 rounded-xl ${
                isActive ? "bg-cerulean text-white" : "text-manatee"
              }`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          );
        })}
      </div>
      <div className="mt-3 flex flex-col gap-1">
        <label
          htmlFor="ticket-title"
          className="flex h-15 items-center gap-2 rounded-[1.125rem] border border-athens-gray bg-white px-4 py-3 text-right text-sm transition-colors focus-within:border-cerulean focus-within:bg-aqua-haze"
        >
          <Search />
          <input
            id="ticket-title"
            type="text"
            placeholder="جستجو از بین تور ها"
            className="h-full w-full self-stretch outline-none placeholder:text-sm placeholder:text-manatee"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
          {searchValue && (
            <Button
              type="button"
              variant="ghost"
              className="p-0! text-black"
              onClick={handleClearSearch}
            >
              <Close />
            </Button>
          )}
        </label>
      </div>
      <ul className="mt-3 space-y-3">
        <li className="bg-white text-[1.125rem] font-bold  text-ship-gray rounded-[1.125rem] border border-athens-gray px-5 py-6  flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Dec />
            <p className=" font-bold">انتشار تور</p>
          </div>
          <div className="flex flex-col text-right justify-between pe-5">
            <p>97,000,000- تومان</p>
            <p className="text-french-gray text-sm">03/05/22 - 15:20</p>
          </div>
        </li>
        <li className="bg-white text-[1.125rem] font-bold  text-ship-gray rounded-[1.125rem] border border-athens-gray px-5 py-6  flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Inc />
            <p className=" font-bold">انتشار تور</p>
          </div>
          <div className="flex flex-col text-right justify-between pe-5">
            <p>97,000,000+ تومان</p>
            <p className="text-french-gray text-sm">03/05/22 - 15:20</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Wallet;
