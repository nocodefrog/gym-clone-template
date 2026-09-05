import Link from "next/link";
import { theme } from "@/data/theme";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-bold">404</h1>

      <h2 className="mt-4 text-2xl font-semibold">
        Page Not Found
      </h2>

      <p className="mt-4 max-w-md text-gray-600">
        The page you are looking for doesn't exist or has been moved.
      </p>

      <Link
        href="/"
        className={`mt-8 rounded-lg px-6 py-3 ${theme.primary} ${theme.textOnPrimary} ${theme.primaryHover}`}
      >
        Back to Home
      </Link>
    </main>
  );
}