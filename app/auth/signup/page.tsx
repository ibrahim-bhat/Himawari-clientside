import SignUpCard from "@/components/auth/SignUpCard";

export default function SignUpPage() {
  return (
    <div
      className="flex min-h-screen items-center justify-center p-4"
      style={{ backgroundColor: "var(--login-bg)" }}
    >
      <SignUpCard />
    </div>
  );
}
