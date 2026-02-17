"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";

export default function LoginCard() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="w-full max-w-[420px] rounded-2xl bg-[var(--card-bg)] p-8 shadow-sm"
      style={{ border: "1px solid var(--border)" }}
    >
      <div className="flex flex-col items-center gap-6">
        <Logo />

        <div className="w-full text-center">
          <h1 className="text-3xl font-bold text-[#259A9E]">Welcome Back</h1>
          <p className="mt-2 text-sm font-bold text-[#282929]">
            Please login in your account.
          </p>
        </div>

        <form className="flex w-full flex-col gap-4">
          <div className="text-left">
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-bold text-[#282828]"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border bg-[#f9fafb] px-4 py-3 text-sm text-[#171717] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
              style={{ borderColor: "var(--input-border)" }}
            />
          </div>

          <div className="text-left">
            <label
              htmlFor="password"
              className="mb-1.5 block text-sm font-bold text-[#282828]"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full rounded-lg border bg-[#f9fafb] px-4 py-3 pr-10 text-sm text-[#171717] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
                style={{ borderColor: "var(--input-border)" }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[#171717]"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878a4.5 4.5 0 106.262 6.262M4 4l3 3m12 0l3 3m0 0l-3-3m3 3V9" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-[var(--input-border)] text-[var(--accent)] focus:ring-[var(--accent)]"
                style={{ accentColor: "var(--accent)" }}
              />
              <span className="text-sm text-[#374151]">Remember me</span>
            </label>
            <Link
              href="#"
              className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)]"
            >
              Forgot Password?
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

        <p className="w-full text-center text-sm text-[var(--text-muted)]">
          Don&apos;t have an account?{" "}
          <Link
            href="/auth/signup"
            className="font-medium text-[var(--accent)] hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
