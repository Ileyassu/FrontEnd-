import { createElement, User, Settings, LogOut, Trophy, Mail } from "lucide";

export function ProfileIcon() {
  const container = (
    <div class="relative group">
      <div class="flex flex-row justify-center items-center cursor-pointer">
        <a class="mr-4" href="/profile">
          <img
            src="/media/avatar/avatar.png"
            class="rounded-full w-10 h-10 object-cover border-2 border-primary/30 group-hover:border-primary transition-all duration-300"
            alt=""
          />
        </a>
        <p class="text-secondary text-[15px] pr-2">UserName</p>
        <svg
          class="w-4 h-4 text-secondary-text transition-transform duration-300 group-hover:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {/* Dropdown Menu */}
      <div class="absolute right-0 top-full mt-2 w-64 bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden z-50">
        {/* User Info Section */}
        <div class="px-4 py-4 border-b border-primary/10 bg-linear-to-br from-primary/5 to-transparent">
          <div class="flex items-center gap-3">
            <img
              src="/media/avatar/avatar.png"
              class="w-12 h-12 rounded-full border-2 border-primary/40"
              alt=""
            />
            <div>
              <p class="text-white font-semibold text-sm">UserName</p>
              <p class="text-secondary-text text-xs">user@example.com</p>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div class="py-2" id="menu-items"></div>

        {/* Logout Section */}
        <div class="border-t border-primary/20">
          <button
            class="w-full px-4 py-3 flex items-center gap-3 text-red-400 hover:bg-red-500/10 transition-colors duration-200 group/logout"
            id="logout-btn"
          >
            <span class="logout-icon"></span>
            <span class="text-sm font-medium">Logout</span>
          </button>
        </div>
      </div>
    </div>
  ) as HTMLElement;

  // Menu items data
  const menuItems = [
    { icon: User, label: "My Profile", href: "/profile" },
    { icon: Trophy, label: "My Stats", href: "/stats" },
    { icon: Mail, label: "Messages", href: "/messages" },
    { icon: Settings, label: "Settings", href: "/settings" },
  ];

  const menuContainer = container.querySelector("#menu-items");
  if (menuContainer) {
    menuItems.forEach((item) => {
      const menuItem = document.createElement("a");
      menuItem.href = item.href;
      menuItem.className =
        "px-4 py-3 flex items-center gap-3 text-secondary-text hover:text-primary hover:bg-primary/10 transition-all duration-200 group/item";

      const iconSpan = document.createElement("span");
      iconSpan.className =
        "text-secondary-text group-hover/item:text-primary transition-colors duration-200";
      const icon = createElement(item.icon, {
        size: 18,
        strokeWidth: 2,
      });
      iconSpan.appendChild(icon);

      const label = document.createElement("span");
      label.className = "text-sm font-medium";
      label.textContent = item.label;

      menuItem.appendChild(iconSpan);
      menuItem.appendChild(label);
      menuContainer.appendChild(menuItem);
    });
  }

  // Add logout icon
  const logoutBtn = container.querySelector("#logout-btn");
  if (logoutBtn) {
    const logoutIconSpan = logoutBtn.querySelector(
      ".logout-icon"
    ) as HTMLElement;
    if (logoutIconSpan) {
      const logoutIcon = createElement(LogOut, {
        size: 18,
        strokeWidth: 2,
      });
      logoutIconSpan.appendChild(logoutIcon);
    }
  }

  return container;
}
