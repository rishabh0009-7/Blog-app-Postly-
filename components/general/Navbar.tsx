"use client";

import Link from "next/link";
import { buttonVariants } from "../ui/button";
import {
  useKindeAuth,
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs";


export function Navbar() {
  const { user, isAuthenticated } = useKindeAuth();

  return (
    <nav className="py-5 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Link href="/" className="text-3xl font-bold">
          Blog<span className="text-blue-500">Nest</span>
        </Link>
      </div>

      <div className="hidden sm:flex items-center gap-6">
        <Link
          href="/"
          className="text-sm font-medium hover:text-blue-500 transition-colors"
        >
          Home
        </Link>
        <Link
          href="/dashboard"
          className="text-sm font-medium hover:text-blue-500 transition-colors"
        >
          Dashboard
        </Link>
      </div>

      <div className="flex items-center gap-4">
        {isAuthenticated && user ? (
          <>
            <span className="text-sm">Hi, {user.given_name}</span>
            <LogoutLink className={buttonVariants()}>
              Logout
            </LogoutLink>
          </>
        ) : (
          <>
            <LoginLink className={buttonVariants()}>
              Login
            </LoginLink>
            <RegisterLink
              className={buttonVariants({ variant: "secondary" })}
            >
              Signup
            </RegisterLink>
          </>
        )}
      </div>
    </nav>
  );
}
