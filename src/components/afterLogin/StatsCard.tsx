import { createElement } from "lucide";

interface StatsCardProps {
  label: string;
  value: string;
  icon: any;
  color: string;
}

export function StatsCard({ label, value, icon, color }: StatsCardProps) {
  const card = document.createElement("div");
  card.className =
    "bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 shadow-lg hover:border-" +
    color +
    "-500/50 transition-all";

  const iconWrapper = document.createElement("div");
  iconWrapper.className =
    "w-12 h-12 rounded-full bg-" +
    color +
    "-500/10 flex items-center justify-center mb-4";

  const colorMap: Record<string, string> = {
    primary: "#00D9FF",
    cyan: "#06b6d4",
    purple: "#a855f7",
    pink: "#ec4899",
  };

  const iconElement = createElement(icon, {
    size: 24,
    strokeWidth: 2,
    color: colorMap[color] || "#00D9FF",
  });
  iconWrapper.appendChild(iconElement);

  const valueEl = document.createElement("div");
  valueEl.className = "text-white text-3xl font-bold mb-1";
  valueEl.textContent = value;

  const labelEl = document.createElement("div");
  labelEl.className = "text-secondary-text text-sm";
  labelEl.textContent = label;

  card.appendChild(iconWrapper);
  card.appendChild(valueEl);
  card.appendChild(labelEl);

  return card;
}
