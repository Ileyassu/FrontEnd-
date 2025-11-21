export function RecentlyAdded() {
  const widget = (
    <div class="bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 shadow-lg">
      <h3 class="text-white text-lg font-semibold mb-4">Recently added</h3>
      <div class="space-y-4"></div>
    </div>
  ) as HTMLElement;

  // User data
  const users = [
    { name: "Propw", role: "@player", date: "Mon, 08 May" },
    { name: "Propw", role: "@player", date: "Mon, 08 May" },
    { name: "Propw", role: "@player", date: "Mon, 08 May" },
  ];

  const container = widget.querySelector("div.space-y-4");

  users.forEach((user) => {
    const userItem = document.createElement("div");
    userItem.className = "flex items-center gap-3";

    // Avatar with gradient border
    const avatarWrapper = document.createElement("div");
    avatarWrapper.className = "relative";

    const avatarBorder = document.createElement("div");
    avatarBorder.className =
      "w-12 h-12 rounded-full bg-linear-to-br from-primary to-primary/30 p-[2px]";

    const avatarInner = document.createElement("div");
    avatarInner.className =
      "w-full h-full rounded-full bg-primary-dark flex items-center justify-center";

    const avatarText = document.createElement("span");
    avatarText.className = "text-primary text-sm font-bold";
    avatarText.textContent = user.name.charAt(0);

    avatarInner.appendChild(avatarText);
    avatarBorder.appendChild(avatarInner);
    avatarWrapper.appendChild(avatarBorder);

    // User info
    const info = document.createElement("div");
    info.className = "flex-1";

    const name = document.createElement("p");
    name.className = "text-white text-sm font-medium";
    name.textContent = user.name;

    const role = document.createElement("p");
    role.className = "text-secondary-text text-xs";
    role.textContent = user.role;

    info.appendChild(name);
    info.appendChild(role);

    // Date
    const date = document.createElement("p");
    date.className = "text-secondary-text text-xs";
    date.textContent = user.date;

    userItem.appendChild(avatarWrapper);
    userItem.appendChild(info);
    userItem.appendChild(date);

    container?.appendChild(userItem);
  });

  return widget;
}
