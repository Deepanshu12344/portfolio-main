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
    <div className="github-fixed-theme grid gap-6 rounded-md border border-zinc-800 bg-[#0d1117] p-5 lg:grid-cols-[1fr_220px]">
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

      <div className="space-y-4 pt-2">
        <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">Quick Stats</p>
        <ul className="space-y-3 text-sm text-zinc-300">
          <li className="group flex items-start gap-3 transition-colors hover:text-zinc-100">
            <span className="mt-1.5 h-2 w-2 rounded-full bg-amber-700" aria-hidden="true" />
            <div>
              <p className="font-medium">Public Repos: <span className="text-zinc-100">{stats.publicRepos}</span></p>
              <p className="max-h-0 overflow-hidden text-xs text-zinc-500 transition-all duration-200 group-hover:mt-1 group-hover:max-h-8">
                Total public repositories currently visible on profile.
              </p>
            </div>
          </li>
          <li className="group flex items-start gap-3 transition-colors hover:text-zinc-100">
            <span className="mt-1.5 h-2 w-2 rounded-full bg-amber-700" aria-hidden="true" />
            <div>
              <p className="font-medium">Recent Commits: <span className="text-zinc-100">{stats.recentCommits}</span></p>
              <p className="max-h-0 overflow-hidden text-xs text-zinc-500 transition-all duration-200 group-hover:mt-1 group-hover:max-h-8">
                Push commits counted from recent public GitHub activity.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
