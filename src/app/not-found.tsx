import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container flex min-h-screen flex-col items-center justify-center gap-4 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-reconciled">404</p>
      <h1 className="text-2xl font-semibold text-ink dark:text-paper">
        This entry isn't in the ledger.
      </h1>
      <p className="max-w-sm text-sm text-ink/60 dark:text-paper/60">
        The page you're looking for doesn't exist or has moved.
      </p>
      <Button variant="primary" asChild className="mt-2">
        <Link href="/">Back to home</Link>
      </Button>
    </div>
  );
}
