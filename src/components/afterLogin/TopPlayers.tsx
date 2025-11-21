export function TopPlayers() {
  const widget = (
    <div class="bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 shadow-lg">
      <h3 class="text-white text-lg font-semibold mb-4">Top players</h3>
      <div class="space-y-3"></div>
    </div>
  ) as HTMLElement;

  // Player data
  const players = [
    { rank: 1, name: "Propw", role: "@player" },
    { rank: 2, name: "Propw", role: "@player" },
    { rank: 3, name: "Propw", role: "@player" },
    { rank: 4, name: "Propw", role: "@player" },
  ];

  const container = widget.querySelector("div.space-y-3");

  players.forEach((player) => {
    const playerItem = document.createElement("div");
    playerItem.className = "flex items-center gap-3";

    // Rank
    const rank = document.createElement("span");
    rank.className = "text-secondary-text text-sm font-medium w-6";
    rank.textContent = `${player.rank}.`;

    // Avatar with gradient border
    const avatarWrapper = document.createElement("div");
    avatarWrapper.className = "relative";

    const avatarBorder = document.createElement("div");
    avatarBorder.className =
      "w-10 h-10 rounded-full bg-linear-to-br from-primary to-primary/30 p-[2px]";

    const avatarInner = document.createElement("div");
    avatarInner.className =
      "w-full h-full rounded-full bg-primary-dark flex items-center justify-center";

    const avatarText = document.createElement("span");
    avatarText.className = "text-primary text-xs font-bold";
    avatarText.textContent = player.name.charAt(0);

    avatarInner.appendChild(avatarText);
    avatarBorder.appendChild(avatarInner);
    avatarWrapper.appendChild(avatarBorder);

    // Player info
    const info = document.createElement("div");
    info.className = "flex-1";

    const name = document.createElement("p");
    name.className = "text-white text-sm font-medium";
    name.textContent = player.name;

    const role = document.createElement("p");
    role.className = "text-secondary-text text-xs";
    role.textContent = player.role;

    info.appendChild(name);
    info.appendChild(role);

    // Message button
    const button = document.createElement("button");
    button.className =
      "bg-white hover:bg-gray-100 text-black text-xs font-medium px-4 py-1.5 rounded-md transition-colors";
    button.textContent = "Message";

    playerItem.appendChild(rank);
    playerItem.appendChild(avatarWrapper);
    playerItem.appendChild(info);
    playerItem.appendChild(button);

    container?.appendChild(playerItem);
  });

  return widget;
}
