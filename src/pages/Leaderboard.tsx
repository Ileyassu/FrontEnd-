import { Header } from "@/components/afterLogin/Header";
import { Sidebar } from "@/components/afterLogin/Sidebar";
import { Trophy, Medal, TrendingUp, Zap } from "lucide";
import { StatsCard } from "@/components/afterLogin/StatsCard";
import { TopChampionsCard } from "@/components/afterLogin/TopChampionsCard";
import { LeaderboardTable } from "@/components/afterLogin/LeaderboardTable";

export function Leaderboard() {
  const container = (
    <div class="flex min-h-screen relative bg-black">
      {/* Animated Grid Background */}
      <div
        class="fixed inset-0 overflow-hidden pointer-events-none"
        style="z-index: 0;"
      >
        <div
          class="absolute inset-0 animate-grid"
          style="background-image: linear-gradient(to right, rgba(139, 92, 246, 0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(139, 92, 246, 0.5) 1px, transparent 1px); background-size: 80px 80px; opacity: 0.4; height: 200%;"
        ></div>
      </div>

      {/* Multi-colored Background Effects */}
      <div
        class="fixed inset-0 overflow-hidden pointer-events-none"
        style="z-index: 1;"
      >
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-primary/6 rounded-full blur-[140px]"></div>
        <div class="absolute bottom-1/4 right-1/3 w-80 h-80 bg-cyan-500/5 rounded-full blur-[140px]"></div>
        <div class="absolute top-1/3 right-1/4 w-72 h-72 bg-pink-500/5 rounded-full blur-[140px]"></div>
        <div class="absolute bottom-1/2 left-1/3 w-64 h-64 bg-purple-500/4 rounded-full blur-[120px]"></div>
      </div>

      {/* Sidebar */}
      <div style="position: relative; z-index: 10;">
        <Sidebar />
      </div>

      {/* Main content */}
      <div
        class="flex-1 flex flex-col"
        style="position: relative; z-index: 10;"
      >
        <Header />

        <main class="flex-1 p-8">
          <div class="max-w-7xl mx-auto">
            {/* Page Title */}
            <div class="mb-8">
              <h1 class="text-white text-4xl font-bold mb-2">Leaderboard</h1>
              <p class="text-secondary-text text-lg">
                Top players competing for glory
              </p>
            </div>

            {/* Stats Cards */}
            <div
              class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
              id="stats-container"
            ></div>

            {/* Main Content Grid: Leaderboard Table + Top Champions Card */}
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Leaderboard Table - Takes 2 columns */}
              <div class="lg:col-span-2" id="table-container"></div>

              {/* Top Champions Card - Takes 1 column */}
              <div id="champions-container"></div>
            </div>
          </div>
        </main>
      </div>
    </div>
  ) as HTMLElement;

  // Stats data
  const stats = [
    { label: "Total Players", value: "2,547", icon: TrendingUp, color: "cyan" },
    { label: "Active Games", value: "143", icon: Zap, color: "purple" },
    { label: "Tournaments", value: "12", icon: Trophy, color: "pink" },
    { label: "Top Score", value: "9,850", icon: Medal, color: "primary" },
  ];

  const statsContainer = container.querySelector("#stats-container");
  stats.forEach((stat) => {
    statsContainer?.appendChild(
      StatsCard({
        label: stat.label,
        value: stat.value,
        icon: stat.icon,
        color: stat.color,
      })
    );
  });

  // Add Table
  const tableContainer = container.querySelector("#table-container");
  tableContainer?.appendChild(LeaderboardTable());

  // Add Top Champions Card
  const championsContainer = container.querySelector("#champions-container");
  championsContainer?.appendChild(TopChampionsCard());

  return container;
}
