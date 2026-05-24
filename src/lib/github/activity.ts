export type GithubActivity = {
  followers: number;
  following: number;
  publicRepos: number;
  totalStars: number;
  recentCommits: number;
};

const USERNAME = "Deepanshu12344";

export async function getGithubActivity(): Promise<GithubActivity> {
  try {
    const headers: HeadersInit = {
      Accept: "application/vnd.github+json",
    };

    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const [userRes, reposRes, eventsRes] = await Promise.all([
      fetch(`https://api.github.com/users/${USERNAME}`, { headers, next: { revalidate: 3600 } }),
      fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100&type=owner`, {
        headers,
        next: { revalidate: 3600 },
      }),
      fetch(`https://api.github.com/users/${USERNAME}/events/public?per_page=100`, {
        headers,
        next: { revalidate: 1800 },
      }),
    ]);

    if (!userRes.ok || !reposRes.ok || !eventsRes.ok) {
      return { followers: 0, following: 0, publicRepos: 0, totalStars: 0, recentCommits: 0 };
    }

    const user = (await userRes.json()) as { followers: number; following: number; public_repos: number };
    const repos = (await reposRes.json()) as Array<{ stargazers_count: number }>;
    const events = (await eventsRes.json()) as Array<{ type: string; payload?: { commits?: Array<unknown> } }>;

    const totalStars = repos.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0);
    const recentCommits = events
      .filter((e) => e.type === "PushEvent")
      .reduce((sum, e) => sum + (e.payload?.commits?.length || 0), 0);

    return {
      followers: user.followers,
      following: user.following,
      publicRepos: user.public_repos,
      totalStars,
      recentCommits,
    };
  } catch {
    return { followers: 0, following: 0, publicRepos: 0, totalStars: 0, recentCommits: 0 };
  }
}
