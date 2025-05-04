import Link from "next/link";
import { Button } from "@/components/ui/button"; // Make sure path is correct

const Articles = () => {
  return (
    <div className="flex justify-center items-center">
      <Button asChild variant="secondary" size="lg" className="w-30 cursor-pointer hover:bg-gray-300">
        <Link href="/articles">Articles</Link>
      </Button>
    </div>
  );
};

export default Articles;
