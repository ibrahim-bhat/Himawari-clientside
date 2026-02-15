"use client";

import Link from "next/link";
import Logo from "@/components/ui/Logo";

export default function LoginCard() {
  return (
    <div
      className="w-full max-w-[420px] rounded-2xl bg-[(--card-bg)] p-8 shadow-sm"
      style={{ border: "1px solid var(--border)" }}
    >
      <div className="flex flex-col items-center gap-6">
        <Logo className="justify-center" />

        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#2C8C8C]">Welcome Back</h1>
          <p className="mt-2 text-sm  font-bold text-[#282929]">
       Please login to your account.
     </p>
        </div>

        <form className="flex w-full flex-col gap-4">
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm  font-bold text-[#282828]"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-[(--border)] bg-[#f9fafb] px-4 py-3 text-sm text-[#171717] placeholder:text-[(--text-muted)] focus:border-[(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-1.5 block text-sm font-bold text-[#282828]"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-[(--border)] bg-[#f9fafb] px-4 py-3 text-sm text-[#171717] placeholder:text-[(--text-muted)] focus:border-[(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-[(--border)] text-[(--accent)] focus:ring-[(--accent)]"
                style={{ accentColor: "var(--accent)" }}
              />
              <span className="text-sm text-[#374151]">Remember me</span>
            </label>
            <Link
              href="#"
              className="text-sm text-[(--text-muted)] hover:text-[(--accent)]"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg py-3 text-sm font-semibold text-white transition-colors hover:opacity-95"
            style={{ backgroundColor: "var(--accent)" }}

          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-[(--text-muted)]">
          Don&apos;t have an account?{" "}
          <Link
            href="/auth/signup"
            className="font-medium text-[var(--accent)] hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
