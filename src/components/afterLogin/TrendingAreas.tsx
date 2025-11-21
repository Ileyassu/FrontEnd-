import { GameCard } from "./GameCard";

export function TrendingAreas() {
  const section = (
    <div class="mb-8">
      {/* Section Header */}
      <div class="mb-6">
        <h2 class="text-white text-2xl font-bold mb-2">Trending Areas</h2>
        <p class="text-secondary-text text-sm">
          Explore the hottest and most exciting areas currently trending in your
          favorite games!
        </p>
      </div>

      {/* Game Cards Grid */}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
    </div>
  ) as HTMLElement;

  // Add game cards
  const grid = section.querySelector("div.grid");
  if (grid) {
    grid.appendChild(
      GameCard({
        title: "VOID PONG",
        mode: "Online Game",
        status: "online",
      })
    );
    grid.appendChild(
      GameCard({
        title: "VOID PONG",
        mode: "Offline Game",
        status: "offline",
      })
    );
    grid.appendChild(
      GameCard({
        title: "VOID PONG",
        mode: "Bot Game",
        status: "bot",
      })
    );
  }

  return section;
}
