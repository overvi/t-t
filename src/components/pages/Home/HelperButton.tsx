import Button from "@/components/Button";
import PlusIcon from "@/assets/images/plus.svg?react";

const HelperButton = () => {
  return (
    <Button
      className="shadow-help border-0 bottom-0 rounded-b-none rounded-t-[1.125rem] fixed right-0 left-0"
      variant="helper"
      icon={<PlusIcon />}
    >
      افزودن تور
    </Button>
  );
};

export default HelperButton;
