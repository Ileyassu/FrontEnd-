import { ProfileIcon } from "./ProfileIcon";
import { createElement, Search, Bell } from "lucide";

export function Header() {
  const header = (
    <header class="sticky top-0 z-40 bg-primary-dark/30 backdrop-blur-sm h-20 flex items-center pt-6 px-8">
      <div class="flex items-center justify-between w-full max-w-full">
        {/* Center - Search Bar */}
        <div class="flex-1 flex justify-center">
          <div class="relative w-full max-w-xl">
            <input
              type="text"
              class="w-full h-11 pl-11 pr-4 rounded-xl bg-primary-dark/40 border border-secondary-text/20 text-white placeholder:text-secondary-text/50 focus:border-primary focus:bg-primary-dark/60 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-200"
              placeholder="Search users..."
            />
          </div>
        </div>

        {/* Right side - Notification + Profile */}
        <div class="flex items-center gap-3">
          {/* Notification Bell */}
          <button class="relative p-2.5 rounded-lg hover:bg-primary/10 transition-all duration-200 group"></button>

          <div class="ml-2">
            <ProfileIcon />
          </div>
        </div>
      </div>
    </header>
  ) as HTMLElement;

  // Add search icon
  const searchIcon = createElement(Search, {
    size: 20,
    strokeWidth: 2,
    color: "#878787",
  }) as Element;
  searchIcon.setAttribute(
    "class",
    "absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none transition-colors"
  );

  const inputWrapper = header.querySelector("div.relative");
  if (inputWrapper) {
    inputWrapper.appendChild(searchIcon);
  }

  // Add notification bell icon
  const bellButton = header.querySelector("button");
  if (bellButton) {
    const bellIcon = createElement(Bell, {
      size: 22,
      strokeWidth: 2,
      color: "#878787",
    });
    bellIcon.setAttribute(
      "class",
      "group-hover:text-primary transition-colors"
    );
    bellButton.appendChild(bellIcon);

    // Add notification dot (pulsing animation)
    const dot = document.createElement("span");
    dot.className =
      "absolute top-2 right-2 w-2 h-2 bg-primary rounded-full animate-pulse";
    bellButton.appendChild(dot);
  }

  return header;
}
