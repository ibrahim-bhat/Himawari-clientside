"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Logo from "@/components/ui/Logo";

export default function SignUpCard() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }
    if (!password) {
      setError("Please enter a password.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);
    // Replace with your API call when backend is ready
    setTimeout(() => {
      setIsSubmitting(false);
      router.push("/auth/login");
    }, 500);
  }

  return (
    <div
      className="w-full max-w-[420px] rounded-2xl bg-[var(--card-bg)] p-8 shadow-sm"
      style={{ border: "1px solid var(--border)" }}
    >
      <div className="flex flex-col items-center gap-6">
        <Logo />

        <div className="w-full text-center">
          <h1 className="text-3xl font-bold text-[#2C8C8C]">Create Account</h1>
          <p className="mt-2 text-sm font-bold text-[#282929]">
            Please sign up to your account.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col gap-4"
        >
          {error && (
            <p className="rounded-lg bg-red-50 px-3 py-2 text-left text-sm text-red-600">
              {error}
            </p>
          )}

          <div className="text-center">
            <label
              htmlFor="name"
              className="mb-1.5 block text-left text-sm font-medium text-[#282828]"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border bg-[#f9fafb] px-4 py-3 text-left text-sm text-[#171717] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
              style={{ borderColor: "var(--input-border)" }}
            />
          </div>

          <div className="text-left">
            <label
              htmlFor="email"
              className="mb-1.5 block text-left text-sm font-medium text-[#282828]"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border bg-[#f9fafb] px-4 py-3 text-left text-sm text-[#171717] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
              style={{ borderColor: "var(--input-border)" }}
            />
          </div>

          <div className="text-left">
            <label
              htmlFor="password"
              className="mb-1.5 block text-left text-sm font-medium text-[#282828]"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border bg-[#f9fafb] px-4 py-3 text-left text-sm text-[#171717] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
              style={{ borderColor: "var(--input-border)" }}
            />
          </div>

          <div className="text-left">
            <label
              htmlFor="confirmPassword"
              className="mb-1.5 block text-left text-sm font-medium text-[#282828]"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full rounded-lg border bg-[#f9fafb] px-4 py-3 text-left text-sm text-[#171717] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
              style={{ borderColor: "var(--input-border)" }}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg py-3 text-sm font-semibold text-white transition-colors hover:opacity-95 disabled:opacity-70"
            style={{ backgroundColor: "var(--accent)" }}
          >
            {isSubmitting ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        <p className="w-full text-center text-sm text-[var(--text-muted)]">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="font-medium text-[var(--accent)] hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
