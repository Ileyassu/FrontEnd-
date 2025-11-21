export function GameCard({
  title,
  mode,
  status,
}: {
  title: string;
  mode: string;
  status: "online" | "offline" | "bot";
}) {
  const statusColors = {
    online: {
      bg: "bg-green-500",
      text: "text-green-500",
      glow: "shadow-green-500/50",
    },
    offline: {
      bg: "bg-gray-500",
      text: "text-gray-500",
      glow: "shadow-gray-500/50",
    },
    bot: {
      bg: "bg-purple-500",
      text: "text-purple-500",
      glow: "shadow-purple-500/50",
    },
  };

  const colors = statusColors[status];

  const card = (
    <div class="group relative rounded-xl overflow-hidden bg-linear-to-br from-primary-dark/80 to-primary-dark/40 backdrop-blur-sm border border-primary/30 group-hover:border-primary/50 transition-all duration-500 cursor-pointer">
      {/* Large Decorative Shapes */}
      <div class="absolute top-4 right-4 w-8 h-8 border-2 border-primary/20 rounded-lg rotate-12 group-hover:border-primary/60 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.6)] group-hover:rotate-45 transition-all duration-500"></div>
      <div class="absolute bottom-6 left-4 w-10 h-10 border-2 border-cyan-400/20 rounded-full group-hover:border-cyan-400/60 group-hover:shadow-[0_0_24px_rgba(34,211,238,0.6)] group-hover:scale-110 transition-all duration-500"></div>
      <div class="absolute top-1/3 left-6 w-6 h-6 border-2 border-pink-400/20 rotate-45 group-hover:border-pink-400/60 group-hover:shadow-[0_0_18px_rgba(244,114,182,0.6)] group-hover:rotate-90 transition-all duration-500"></div>
      <div class="absolute bottom-1/4 right-8 w-7 h-7 border-2 border-purple-400/20 rounded-lg group-hover:border-purple-400/60 group-hover:shadow-[0_0_20px_rgba(192,132,252,0.6)] group-hover:-rotate-12 transition-all duration-500"></div>

      {/* Medium Triangle Shapes */}
      <div class="absolute top-20 right-6 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-primary/20 group-hover:border-b-primary/60 group-hover:drop-shadow-[0_0_12px_rgba(139,92,246,0.8)] transition-all duration-500"></div>
      <div class="absolute bottom-16 left-8 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[8px] border-b-blue-400/20 rotate-180 group-hover:border-b-blue-400/60 group-hover:drop-shadow-[0_0_10px_rgba(96,165,250,0.8)] transition-all duration-500"></div>

      {/* Decorative Stars - Glow on Hover */}
      <div class="absolute top-3 right-3 w-1 h-1 bg-primary/40 rounded-full group-hover:shadow-[0_0_8px_rgba(139,92,246,0.8)] group-hover:bg-primary transition-all duration-300"></div>
      <div class="absolute top-6 right-8 w-0.5 h-0.5 bg-primary/30 rounded-full group-hover:shadow-[0_0_6px_rgba(139,92,246,0.7)] group-hover:bg-primary/80 transition-all duration-300"></div>
      <div class="absolute top-4 left-4 w-1 h-1 bg-primary/30 rounded-full animate-pulse group-hover:shadow-[0_0_8px_rgba(139,92,246,0.8)] group-hover:bg-primary transition-all duration-300"></div>
      <div class="absolute bottom-8 left-6 w-0.5 h-0.5 bg-primary/40 rounded-full group-hover:shadow-[0_0_6px_rgba(139,92,246,0.7)] group-hover:bg-primary/80 transition-all duration-300"></div>

      {/* Additional Decorative Shapes - Stars */}
      <div class="absolute top-12 right-16 w-0.5 h-0.5 bg-cyan-400/30 rounded-full group-hover:shadow-[0_0_6px_rgba(34,211,238,0.8)] group-hover:bg-cyan-400 transition-all duration-300"></div>
      <div class="absolute top-20 left-8 w-1 h-1 bg-pink-400/30 rounded-full group-hover:shadow-[0_0_8px_rgba(244,114,182,0.8)] group-hover:bg-pink-400 transition-all duration-300"></div>
      <div class="absolute bottom-16 right-6 w-0.5 h-0.5 bg-purple-400/30 rounded-full group-hover:shadow-[0_0_6px_rgba(192,132,252,0.8)] group-hover:bg-purple-400 transition-all duration-300"></div>
      <div class="absolute bottom-20 left-12 w-1 h-1 bg-blue-400/30 rounded-full group-hover:shadow-[0_0_8px_rgba(96,165,250,0.8)] group-hover:bg-blue-400 transition-all duration-300"></div>

      {/* Diamond Shapes */}
      <div class="absolute top-8 left-16 w-1.5 h-1.5 bg-primary/30 rotate-45 group-hover:shadow-[0_0_10px_rgba(139,92,246,0.9)] group-hover:bg-primary group-hover:scale-125 transition-all duration-300"></div>
      <div class="absolute bottom-12 right-12 w-1 h-1 bg-cyan-400/30 rotate-45 group-hover:shadow-[0_0_8px_rgba(34,211,238,0.8)] group-hover:bg-cyan-400 group-hover:scale-125 transition-all duration-300"></div>

      {/* Tiny Crosses */}
      <div class="absolute top-16 right-20 text-primary/30 text-[8px] group-hover:text-primary group-hover:drop-shadow-[0_0_6px_rgba(139,92,246,0.8)] transition-all duration-300">
        +
      </div>
      <div class="absolute bottom-24 left-20 text-pink-400/30 text-[8px] group-hover:text-pink-400 group-hover:drop-shadow-[0_0_6px_rgba(244,114,182,0.8)] transition-all duration-300">
        +
      </div>

      {/* Gradient Circles - Top Left */}
      <div class="absolute -top-8 -left-8 w-24 h-24 bg-linear-to-br from-cyan-500/20 via-blue-500/15 to-transparent rounded-full blur-2xl group-hover:from-cyan-500/30 group-hover:via-blue-500/25 transition-all duration-500"></div>
      <div class="absolute top-0 left-0 w-16 h-16 bg-linear-to-br from-purple-500/15 via-pink-500/10 to-transparent rounded-full blur-xl group-hover:from-purple-500/25 group-hover:via-pink-500/20 transition-all duration-500"></div>

      {/* Gradient Circles - Bottom Right */}
      <div class="absolute -bottom-8 -right-8 w-28 h-28 bg-linear-to-tl from-pink-500/20 via-purple-500/15 to-transparent rounded-full blur-2xl group-hover:from-pink-500/30 group-hover:via-purple-500/25 transition-all duration-500"></div>
      <div class="absolute bottom-0 right-0 w-20 h-20 bg-linear-to-tl from-orange-500/15 via-red-500/10 to-transparent rounded-full blur-xl group-hover:from-orange-500/25 group-hover:via-red-500/20 transition-all duration-500"></div>

      {/* Content */}
      <div class="relative p-5">
        {/* Status Badge */}
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-2">
            <div
              class={`w-1.5 h-1.5 rounded-full ${colors.bg} animate-pulse`}
            ></div>
            <span
              class={`text-[10px] font-medium uppercase tracking-wider ${colors.text}`}
            >
              {status}
            </span>
          </div>
        </div>

        {/* Game Visual - Pong Table */}
        <div class="relative mb-4">
          <div class="bg-black/60 backdrop-blur-sm rounded-lg p-4 border border-primary/20 group-hover:border-primary/40 transition-all duration-300">
            {/* Pong Game */}
            <div class="relative h-28 flex items-center justify-between">
              {/* Left Paddle */}
              <div class="w-1.5 h-14 bg-linear-to-b from-primary to-primary/50 rounded-full shadow-md shadow-primary/50 group-hover:h-16 transition-all duration-300"></div>

              {/* Center Area */}
              <div class="flex-1 relative mx-4">
                {/* Net */}
                <div class="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 border-l border-dashed border-primary/30"></div>

                {/* Ball */}
                <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div class="w-3 h-3 bg-primary rounded-full shadow-md shadow-primary/80 animate-pulse"></div>
                  <div class="absolute inset-0 w-3 h-3 bg-primary/30 rounded-full animate-ping"></div>
                </div>

                {/* Corner Dots */}
                <div class="absolute top-1 left-1 w-1 h-1 bg-primary/40 rounded-full"></div>
                <div class="absolute top-1 right-1 w-1 h-1 bg-primary/40 rounded-full"></div>
                <div class="absolute bottom-1 left-1 w-1 h-1 bg-primary/40 rounded-full"></div>
                <div class="absolute bottom-1 right-1 w-1 h-1 bg-primary/40 rounded-full"></div>
              </div>

              {/* Right Paddle */}
              <div class="w-1.5 h-14 bg-linear-to-b from-primary to-primary/50 rounded-full shadow-md shadow-primary/50 group-hover:h-16 transition-all duration-300"></div>
            </div>
          </div>
        </div>

        {/* Title & Mode */}
        <div class="text-center">
          <h3 class="text-primary text-base font-bold uppercase tracking-wide mb-1 group-hover:text-white transition-colors duration-300">
            {title}
          </h3>
          <p class="text-secondary-text text-xs font-light">{mode}</p>
        </div>

        {/* Play Button Hint */}
        <div class="mt-4 pt-4 border-t border-primary/10">
          <div class="flex items-center justify-center gap-2 text-primary/60 group-hover:text-primary transition-colors duration-300">
            <div class="w-6 h-6 rounded-full border border-current flex items-center justify-center">
              <div class="w-0 h-0 border-l-[5px] border-l-current border-y-[3px] border-y-transparent ml-0.5"></div>
            </div>
            <span class="text-[10px] font-medium uppercase tracking-wider">
              Play Now
            </span>
          </div>
        </div>
      </div>
    </div>
  ) as HTMLElement;

  return card;
}
