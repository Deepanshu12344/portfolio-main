import { Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";

export function AchievementsSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24">
      <h3 className="text-3xl font-bold text-slate-100">Achievements</h3>
      <Card className="mt-8 flex items-center gap-4 p-6">
        <Trophy className="text-amber-300" />
        <p className="text-slate-200">1st Prize in team project category at CSI Mumbai.</p>
      </Card>
    </section>
  );
}

