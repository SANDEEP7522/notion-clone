"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";

const Header = () => {
  const { user } = useUser();
  return (
    <div className="flex justify-between items-center p-3">
      {user && (
        <h1 className="text-3xl font-bold">
          {user?.firstName}'s <span className="text-gray-600">BLOG</span>
        </h1>
      )}
      <div className="flex items-center gap-x-5">
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
