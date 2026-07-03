export default function Loading() {
  return (
    <div className="container flex min-h-screen flex-col justify-center gap-6 py-32">
      <div className="h-4 w-40 animate-pulse rounded bg-ink/10 dark:bg-paper/10" />
      <div className="h-12 w-3/4 animate-pulse rounded bg-ink/10 dark:bg-paper/10" />
      <div className="h-12 w-1/2 animate-pulse rounded bg-ink/10 dark:bg-paper/10" />
      <div className="mt-4 h-32 w-full animate-pulse rounded-lg bg-ink/10 dark:bg-paper/10" />
    </div>
  );
}
