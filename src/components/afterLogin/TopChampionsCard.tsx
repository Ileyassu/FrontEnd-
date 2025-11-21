import { createElement, Trophy } from "lucide";

interface Player {
  rank: number;
  name: string;
  score: string;
  avatar: string;
  wins: number;
  losses: number;
}

export function TopChampionsCard() {
  const card = (
    <div class="bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 shadow-2xl">
      <h2 class="text-white text-2xl font-bold mb-6 flex items-center gap-2">
        <span>Top Champions</span>
      </h2>
      <div class="space-y-4" id="top-champions-container"></div>
    </div>
  ) as HTMLElement;

  const topPlayers: Player[] = [
    { rank: 1, name: "NeonKnight", score: "9,850", avatar: "N", wins: 198, losses: 12 },
    { rank: 2, name: "ShadowBlade", score: "8,420", avatar: "S", wins: 176, losses: 24 },
    { rank: 3, name: "CyberWolf", score: "7,935", avatar: "C", wins: 165, losses: 30 },
  ];

  const container = card.querySelector("#top-champions-container");

  topPlayers.forEach((player) => {
    const playerCard = document.createElement("div");
    playerCard.className =
      "flex items-center gap-4 p-4 rounded-xl bg-gray-800/40 border border-gray-700/30 hover:bg-gray-800/60 hover:border-primary/30 transition-all";

    // Rank with medal
    const rankWrapper = document.createElement("div");
    rankWrapper.className = "flex flex-col items-center gap-1";

    const trophyColor =
      player.rank === 1 ? "#FFD700" : player.rank === 2 ? "#C0C0C0" : "#CD7F32";
    const trophy = createElement(Trophy, {
      size: 28,
      strokeWidth: 2,
      color: trophyColor,
      fill: trophyColor,
    });
    rankWrapper.appendChild(trophy);

    const rankBadge = document.createElement("div");
    rankBadge.className = "text-xs font-bold";
    rankBadge.style.color = trophyColor;
    rankBadge.textContent = `#${player.rank}`;
    rankWrapper.appendChild(rankBadge);

    // Avatar
    const avatar = document.createElement("div");
    avatar.className =
      "w-14 h-14 rounded-full bg-linear-to-br from-primary to-primary/30 flex items-center justify-center text-xl font-bold text-white shadow-lg";
    avatar.textContent = player.avatar;

    // Player info
    const infoWrapper = document.createElement("div");
    infoWrapper.className = "flex-1";

    const name = document.createElement("div");
    name.className = "text-white text-lg font-bold mb-1";
    name.textContent = player.name;

    const winRate = (player.wins / (player.wins + player.losses)) * 100;
    const stats = document.createElement("div");
    stats.className = "text-secondary-text text-sm";
    stats.textContent = `${player.wins}W - ${player.losses}L (${winRate.toFixed(1)}%)`;

    infoWrapper.appendChild(name);
    infoWrapper.appendChild(stats);

    // Score
    const scoreWrapper = document.createElement("div");
    scoreWrapper.className = "text-right";

    const scoreLabel = document.createElement("div");
    scoreLabel.className = "text-secondary-text text-xs mb-1";
    scoreLabel.textContent = "Score";

    const score = document.createElement("div");
    score.className = "text-primary text-xl font-bold";
    score.textContent = player.score;

    scoreWrapper.appendChild(scoreLabel);
    scoreWrapper.appendChild(score);

    playerCard.appendChild(rankWrapper);
    playerCard.appendChild(avatar);
    playerCard.appendChild(infoWrapper);
    playerCard.appendChild(scoreWrapper);

    container?.appendChild(playerCard);
  });

  return card;
}
