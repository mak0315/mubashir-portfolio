"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container flex min-h-screen flex-col items-center justify-center gap-4 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-reconciled">
        Unreconciled
      </p>
      <h1 className="text-2xl font-semibold text-ink dark:text-paper">
        Something didn't balance.
      </h1>
      <p className="max-w-sm text-sm text-ink/60 dark:text-paper/60">
        An unexpected error occurred while loading this page. Try again, or head back to the homepage.
      </p>
      <div className="mt-2 flex gap-3">
        <Button variant="primary" onClick={() => reset()}>
          Try again
        </Button>
        <Button variant="outline" asChild>
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </div>
  );
}
