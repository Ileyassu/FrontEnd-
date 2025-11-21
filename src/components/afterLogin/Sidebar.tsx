import { createElement } from "lucide";
import {
  Home,
  Gamepad2,
  MessageSquare,
  Trophy,
  BarChart3,
  Settings,
  LogOut,
} from "lucide";

export function Sidebar() {
  const container = (
    <aside class="sticky top-0 h-screen w-64 bg-primary-dark/50 backdrop-blur-sm flex flex-col overflow-y-auto">
      {/* Logo */}
      <div class="p-6 pb-8">
        <a href="/dashboard">
          <img
            src="/media/logo/logo.png"
            alt="VSPACE Logo"
            class="h-10 w-auto"
          />
        </a>
      </div>

      {/* Account Label */}
      <div class="px-6 pb-4">
        {/* <span class="text-secondary-text text-xs font-light uppercase tracking-wider">Account</span> */}
      </div>

      {/* Menu Items Container */}
      <nav class="flex-1 px-3"></nav>

      {/* Footer */}
      <div class="p-6 pt-4 border-t border-primary/10">
        <p class="text-secondary-text text-xs">© 2025 VOID SPACE</p>
        <p class="text-secondary-text text-xs mt-1">Made By 26TOXIC26 & Nero</p>
      </div>
    </aside>
  ) as HTMLElement;

  // Menu items data
  const menuItems = [
    { icon: Home, label: "Home", href: "/dashboard", active: true },
    { icon: Gamepad2, label: "Game", href: "/game", active: false },
    { icon: MessageSquare, label: "Chat", href: "/chat", active: false },
    { icon: Trophy, label: "Tournament", href: "/tournament", active: false },
    {
      icon: BarChart3,
      label: "Leaderboard",
      href: "/leaderboard",
      active: false,
    },
    { icon: Settings, label: "Settings", href: "/settings", active: false },
    { icon: LogOut, label: "Logout", href: "/logout", active: false },
  ];

  // Find nav element
  const nav = container.querySelector("nav");

  // Build menu items manually
  menuItems.forEach((item) => {
    const link = document.createElement("a");
    link.href = item.href;
    link.className = `flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-all group ${
      item.active
        ? "bg-primary/10 text-primary"
        : "text-secondary-text hover:bg-primary/5 hover:text-white"
    }`;

    // Add left border indicator for active item
    if (item.active) {
      link.style.borderLeft = "3px solid #00D9FF";
      link.style.paddingLeft = "13px"; // Adjust padding to account for border
    }

    // Create icon
    const iconElement = createElement(item.icon, {
      size: 20,
      strokeWidth: 2,
      color: item.active ? "#00D9FF" : "#878787",
    });

    // set CSS class on SVG element (use setAttribute because className is read-only on SVGElement)
    iconElement.setAttribute("class", "transition-colors");
    link.appendChild(iconElement);

    // Create label
    const label = document.createElement("span");
    label.className = "font-medium text-sm";
    label.textContent = item.label;
    link.appendChild(label);

    nav?.appendChild(link);
  });

  return container;
}
