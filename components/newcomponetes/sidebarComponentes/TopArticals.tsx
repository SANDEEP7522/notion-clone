import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const TopArticals = () => {
  return (
    <div className="py-4 px-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {[1, 2, 3, 4].map((_, index) => (
          <Card
            key={index}
            className="bg-card shadow-lg rounded-2xl overflow-hidden"
          >
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-center">
                Top Articles
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <Link href={`/articles/${12345}`} className="block group">
                <div className="w-full h-48 overflow-hidden rounded-lg">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/035/814/806/non_2x/ai-generated-hacker-man-typing-on-laptop-hacking-computer-system-male-in-mask-and-hoodie-ai-generated-free-photo.jpg"
                    alt="Article cover"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300 ease-in-out"
                  />
                </div>

                <div className="flex items-start mt-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>SD</AvatarFallback>
                  </Avatar>

                  <div className="">
                    <p className="text-lg font-semibold">
                      Sandeep
                    </p>

                    <p className="text-sm text-muted-foreground">
                      Full Stack Developer
                    </p>

                    <h5 className="text-base font-medium text-primary">
                      How to Make a Better Website
                    </h5>

                    <p className="text-xs text-muted-foreground flex gap-2">
                      <span>Date</span>
                      <span>•</span>
                      <span>3 hours ago</span>
                    </p>
                  </div>
                </div>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TopArticals;
