"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useEffect, useState } from "react";
import type { GithubActivity } from "@/lib/github/activity";

export function GithubCommitCard({ stats }: { stats: GithubActivity }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="grid gap-6 rounded-md border border-zinc-800 bg-[#0d1117] p-5 lg:grid-cols-[1fr_220px]">
      <div>
        <p className="mb-4 text-3xl font-semibold text-zinc-200">GitHub Contributions</p>
        <div className="overflow-x-auto">
          {mounted ? (
            <GitHubCalendar
              username="Deepanshu12344"
              blockSize={12}
              blockMargin={4}
              fontSize={14}
              colorScheme="dark"
              theme={{ dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"] }}
              labels={{ totalCount: "{{count}} contributions in the last year" }}
            />
          ) : (
            <div className="h-[140px] w-full animate-pulse rounded border border-zinc-800 bg-[#0b1016]" />
          )}
        </div>
      </div>

      <div className="space-y-3">
        <div className="rounded-md border border-zinc-800 bg-black/30 p-3">
          <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">Public Repos</p>
          <p className="mt-1 text-2xl font-semibold text-zinc-200">{stats.publicRepos}</p>
        </div>
        <div className="rounded-md border border-zinc-800 bg-black/30 p-3">
          <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">Followers</p>
          <p className="mt-1 text-2xl font-semibold text-zinc-200">{stats.followers}</p>
        </div>
        <div className="rounded-md border border-zinc-800 bg-black/30 p-3">
          <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">Stars</p>
          <p className="mt-1 text-2xl font-semibold text-zinc-200">{stats.totalStars}</p>
        </div>
        <div className="rounded-md border border-zinc-800 bg-black/30 p-3">
          <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">Recent Commits</p>
          <p className="mt-1 text-2xl font-semibold text-zinc-200">{stats.recentCommits}</p>
        </div>
      </div>
    </div>
  );
}
