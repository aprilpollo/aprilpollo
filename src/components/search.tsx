"use client";
import { useOpen } from "./searchProvider";
import SearchDialog from "fumadocs-ui/components/dialog/search-default";

export default function CustomSearchDialog() {
  const { open, setOpen } = useOpen();
  return <SearchDialog open={open} onOpenChange={setOpen} />;
}
