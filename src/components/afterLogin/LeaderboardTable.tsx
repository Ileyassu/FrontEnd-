import { createElement, Zap } from "lucide";

interface PlayerData {
  rank: number;
  name: string;
  score: number;
  wins: number;
  losses: number;
  streak: number;
}

export function LeaderboardTable() {
  const card = (
    <div class="bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl overflow-hidden shadow-2xl">
      <div class="p-6">
        <h2 class="text-white text-2xl font-bold mb-6">Full Rankings</h2>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b border-gray-700/50">
                <th class="text-left text-secondary-text text-sm font-semibold pb-4 px-4">
                  Rank
                </th>
                <th class="text-left text-secondary-text text-sm font-semibold pb-4 px-4">
                  Player
                </th>
                <th class="text-left text-secondary-text text-sm font-semibold pb-4 px-4">
                  Score
                </th>
                <th class="text-left text-secondary-text text-sm font-semibold pb-4 px-4">
                  Wins
                </th>
                <th class="text-left text-secondary-text text-sm font-semibold pb-4 px-4">
                  Losses
                </th>
                <th class="text-left text-secondary-text text-sm font-semibold pb-4 px-4">
                  Win Rate
                </th>
                <th class="text-left text-secondary-text text-sm font-semibold pb-4 px-4">
                  Streak
                </th>
              </tr>
            </thead>
            <tbody id="leaderboard-body"></tbody>
          </table>
        </div>
      </div>
    </div>
  ) as HTMLElement;

  const leaderboardData: PlayerData[] = [
    {
      rank: 4,
      name: "QuantumRacer",
      score: 7245,
      wins: 142,
      losses: 28,
      streak: 8,
    },
    {
      rank: 5,
      name: "PhantomStrike",
      score: 6890,
      wins: 135,
      losses: 32,
      streak: 5,
    },
    {
      rank: 6,
      name: "VoidWalker",
      score: 6532,
      wins: 128,
      losses: 35,
      streak: 12,
    },
    {
      rank: 7,
      name: "StarBreaker",
      score: 6180,
      wins: 121,
      losses: 41,
      streak: 3,
    },
    {
      rank: 8,
      name: "EclipseHunter",
      score: 5945,
      wins: 116,
      losses: 44,
      streak: 6,
    },
    {
      rank: 9,
      name: "NovaBlast",
      score: 5720,
      wins: 112,
      losses: 48,
      streak: 4,
    },
    {
      rank: 10,
      name: "CrimsonFlare",
      score: 5490,
      wins: 107,
      losses: 53,
      streak: 2,
    },
    {
      rank: 11,
      name: "FrostByte",
      score: 5280,
      wins: 103,
      losses: 57,
      streak: 7,
    },
    {
      rank: 12,
      name: "ThunderBolt",
      score: 5065,
      wins: 99,
      losses: 61,
      streak: 1,
    },
    {
      rank: 13,
      name: "MysticShade",
      score: 4870,
      wins: 95,
      losses: 65,
      streak: 9,
    },
    {
      rank: 14,
      name: "SolarFlare",
      score: 4650,
      wins: 91,
      losses: 69,
      streak: 3,
    },
    {
      rank: 15,
      name: "LunarEclipse",
      score: 4440,
      wins: 87,
      losses: 73,
      streak: 5,
    },
  ];

  const tbody = card.querySelector("#leaderboard-body");

  leaderboardData.forEach((player) => {
    const tr = document.createElement("tr");
    tr.className =
      "border-b border-gray-700/30 hover:bg-gray-800/30 transition-colors";

    // Rank
    const rankCell = document.createElement("td");
    rankCell.className = "py-4 px-4";
    const rankBadge = document.createElement("span");
    rankBadge.className =
      "inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-700/50 text-white text-sm font-semibold";
    rankBadge.textContent = `${player.rank}`;
    rankCell.appendChild(rankBadge);

    // Player
    const playerCell = document.createElement("td");
    playerCell.className = "py-4 px-4";
    const playerDiv = document.createElement("div");
    playerDiv.className = "flex items-center gap-3";

    const avatar = document.createElement("div");
    avatar.className =
      "w-10 h-10 rounded-full bg-linear-to-br from-primary to-primary/30 flex items-center justify-center text-sm font-bold text-white";
    avatar.textContent = player.name.charAt(0);

    const nameSpan = document.createElement("span");
    nameSpan.className = "text-white font-medium";
    nameSpan.textContent = player.name;

    playerDiv.appendChild(avatar);
    playerDiv.appendChild(nameSpan);
    playerCell.appendChild(playerDiv);

    // Score
    const scoreCell = document.createElement("td");
    scoreCell.className = "py-4 px-4 text-primary font-semibold";
    scoreCell.textContent = player.score.toLocaleString();

    // Wins
    const winsCell = document.createElement("td");
    winsCell.className = "py-4 px-4 text-green-400 font-medium";
    winsCell.textContent = player.wins.toString();

    // Losses
    const lossesCell = document.createElement("td");
    lossesCell.className = "py-4 px-4 text-red-400 font-medium";
    lossesCell.textContent = player.losses.toString();

    // Win Rate
    const winRate = (player.wins / (player.wins + player.losses)) * 100;
    const winRateCell = document.createElement("td");
    winRateCell.className = "py-4 px-4 text-white font-medium";
    winRateCell.textContent = `${winRate.toFixed(1)}%`;

    // Streak
    const streakCell = document.createElement("td");
    streakCell.className = "py-4 px-4";
    const streakBadge = document.createElement("span");
    streakBadge.className =
      "inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold " +
      (player.streak >= 5
        ? "bg-primary/20 text-primary"
        : "bg-gray-700/50 text-white");

    const fireIcon = createElement(Zap, { size: 14, strokeWidth: 2 });
    streakBadge.appendChild(fireIcon);

    const streakText = document.createElement("span");
    streakText.textContent = `${player.streak}`;
    streakBadge.appendChild(streakText);
    streakCell.appendChild(streakBadge);

    tr.appendChild(rankCell);
    tr.appendChild(playerCell);
    tr.appendChild(scoreCell);
    tr.appendChild(winsCell);
    tr.appendChild(lossesCell);
    tr.appendChild(winRateCell);
    tr.appendChild(streakCell);

    tbody?.appendChild(tr);
  });

  return card;
}
