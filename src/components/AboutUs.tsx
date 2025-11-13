import { createElement, ArrowUpRight } from "lucide";

export function AboutUs() {
  const linkE = (
    <a
      href="/aboutUs"
      class="inline-flex items-center gap-2 border-2 rounded-lg px-6 py-2 border-white text-white font-semibold hover:bg-white/10 transition"
    >
      About Us
    </a>
  );
  const iconElement = createElement(ArrowUpRight, {
    size: 18,
    strokeWidth: 2,
    color: "#ffffff",
  });
  linkE.appendChild(iconElement);

  return linkE;
}
