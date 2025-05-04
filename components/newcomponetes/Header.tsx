"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { ModeToggle } from "./sidebarComponentes/ModeToggle";

const Header = () => {
  const { user } = useUser();
  return (
    <div className="flex justify-between items-center p-3 sticky top-0 z-50 ">
      {user && (
        <h1 className="text-3xl font-bold text-blue-600">
          {user?.firstName}'s <span className="text-gray-600">BLOG</span>
        </h1>
      )}
      <div className="flex items-center gap-x-5">
        <ModeToggle />
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Header;
