import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import NewDocumentButton from "./newDocumentButton";

const Sidebar = () => {
  const menuOptions = (
    <>
      <NewDocumentButton />
      {/* my Document */}
      {/* List... */}

      {/* Sherd with me  */}
      {/* List...  */}
    </>
  );
  return (
    <div className="flex flex-col items-center gap-4 p-2">
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <AlignJustify className="w-4 h-4" />
          </SheetTrigger>
          <SheetContent side="left" className="bg-gray-200">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <div>{menuOptions}</div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:inline">{menuOptions}</div>
    </div>
  );
};

export default Sidebar;
