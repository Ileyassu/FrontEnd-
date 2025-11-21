import { Header } from "@/components/afterLogin/Header";
import { Sidebar } from "@/components/afterLogin/Sidebar";
import { WelcomeCard } from "@/components/afterLogin/WelcomeCard";
import { TrendingAreas } from "@/components/afterLogin/TrendingAreas";
import { RecentlyAdded } from "@/components/afterLogin/RecentlyAdded";
import { TopPlayers } from "@/components/afterLogin/TopPlayers";

export function Dashboard() {
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

      {/* Multi-colored Background Effects - Darker Space Theme */}
      <div
        class="fixed inset-0 overflow-hidden pointer-events-none"
        style="z-index: 1;"
      >
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-primary/6 rounded-full blur-[140px]"></div>
        <div class="absolute bottom-1/4 right-1/3 w-80 h-80 bg-cyan-500/5 rounded-full blur-[140px]"></div>
        <div class="absolute top-1/3 right-1/4 w-72 h-72 bg-pink-500/5 rounded-full blur-[140px]"></div>
        <div class="absolute bottom-1/2 left-1/3 w-64 h-64 bg-purple-500/4 rounded-full blur-[120px]"></div>
      </div>

      {/* Decorative Colorful Circles - Non-blurry */}
      <div
        class="fixed inset-0 overflow-hidden pointer-events-none"
        style="z-index: 2;"
      >
        {/* Top Right Circle - Gradient */}
        <div class="absolute top-20 right-20 w-40 h-40 bg-linear-to-br from-cyan-500/30 via-blue-500/25 to-purple-500/20 rounded-full border-2 border-cyan-400/40"></div>

        {/* Bottom Left Circle - Gradient */}
        <div class="absolute bottom-20 left-20 w-40 h-40 bg-linear-to-tr from-pink-500/30 via-purple-500/25 to-orange-500/20 rounded-full border-2 border-pink-400/40"></div>
      </div>

      {/* Sidebar on the LEFT */}
      <div style="position: relative; z-index: 10;">
        <Sidebar />
      </div>

      {/* Main content area on the RIGHT */}
      <div
        class="flex-1 flex flex-col"
        style="position: relative; z-index: 10;"
      >
        {/* Header at the TOP of main area */}
        <Header />

        {/* Page content below header */}
        <main class="flex gap-6 p-6">
          {/* Center Content - Main Dashboard */}
          <div class="flex-1"></div>

          {/* Right Sidebar - Widgets */}
          <aside class="w-80 space-y-6 shrink-0"></aside>
        </main>
      </div>
    </div>
  ) as HTMLElement;

  // Add components to main content
  const mainContent = container.querySelector("main > div.flex-1");
  if (mainContent) {
    mainContent.appendChild(WelcomeCard());

    const spacer = document.createElement("div");
    spacer.className = "mb-8";
    mainContent.appendChild(spacer);

    mainContent.appendChild(TrendingAreas());
  }

  // Add widgets to right sidebar
  const rightSidebar = container.querySelector("main > aside");
  if (rightSidebar) {
    rightSidebar.appendChild(RecentlyAdded());
    rightSidebar.appendChild(TopPlayers());
  }

  return container;
}
