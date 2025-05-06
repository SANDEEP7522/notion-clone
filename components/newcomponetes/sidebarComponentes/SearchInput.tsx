import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SearchInput = () => {
  return (
    <div className="relative">
      <Input type="text" placeholder="Search..." className="pl-10" />
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
    </div>
  );
};
export default SearchInput;
