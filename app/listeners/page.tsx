import LoginCard from "@/components/auth/LoginCard";

export default function ListenersPage() {
  return (
    <div
      className="flex min-h-screen items-center justify-center p-4"
      style={{ backgroundColor: "var(--login-bg)" }}
    >
      <LoginCard />
    </div>
  );
}