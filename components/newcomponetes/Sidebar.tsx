import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import NewDocumentButton from "./sidebarComponentes/NewDocumentButton";
import Articals from "./sidebarComponentes/Articals";
import Tutoril from "./sidebarComponentes/Tutorial";
import About from "./sidebarComponentes/About";
import Dashboard from "./sidebarComponentes/Dashboard";

const Sidebar = () => {
  const menuOptions = (
    <>
      <NewDocumentButton />
      <Articals />
      <Tutoril />
      <About />
      <Dashboard />
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
              <div
              className="flex flex-col gap-2 cursor-pointer"
              >{menuOptions}</div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:flex flex-col items-center gap-5">{menuOptions}</div>
    </div>
  );
};

export default Sidebar;
