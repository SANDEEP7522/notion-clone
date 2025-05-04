import Link from "next/link";
import { Button } from "../../ui/button";

const Tutorial = () => {
  return (
    <div className="flex justify-center items-center">
      <Button
        asChild
        variant="secondary"
        size="lg"
        className="w-30 cursor-pointer hover:bg-gray-300"
      >
        <Link href="/articles">Tutorial</Link>
      </Button>
    </div>
  );
};

export default Tutorial;
