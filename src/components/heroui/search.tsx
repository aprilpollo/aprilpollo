import { useOpen } from "../searchProvider";
import { Input } from "@heroui/input";
import { Search } from "lucide-react";

export function SearchUI() {
  const { open, setOpen } = useOpen();
  return (
    <Input
      startContent={<Search className=" text-default-500" />}
      placeholder="Search..."
      radius="sm"
      size="sm"
      onClick={() => setOpen(!open)}
    />
  );
}

export function SearchButtonUI() {
  const { open, setOpen } = useOpen();
  return (
    <button onClick={() => setOpen(!open)}>
      <Search className=" text-default-500" />
    </button>
  );
}
