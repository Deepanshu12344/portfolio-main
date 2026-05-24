import Image from "next/image";

export function GithubSection() {
  const cards = [
    { alt: "GitHub stats", src: "https://github-readme-stats.vercel.app/api?username=Deepanshu12344&show_icons=true&theme=tokyonight&hide_border=true" },
    { alt: "Top languages", src: "https://github-readme-stats.vercel.app/api/top-langs/?username=Deepanshu12344&layout=compact&theme=tokyonight&hide_border=true" },
    { alt: "Streak", src: "https://streak-stats.demolab.com?user=Deepanshu12344&theme=tokyonight&hide_border=true" },
    { alt: "Contribution graph", src: "https://github-readme-activity-graph.vercel.app/graph?username=Deepanshu12344&theme=tokyo-night&hide_border=true" },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-24">
      <h3 className="text-3xl font-bold text-slate-100">GitHub Activity</h3>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {cards.map((item) => (
          <div key={item.alt} className="overflow-hidden rounded-xl border border-slate-800">
            <Image alt={item.alt} src={item.src} width={900} height={420} className="h-auto w-full" unoptimized />
          </div>
        ))}
      </div>
    </section>
  );
}

