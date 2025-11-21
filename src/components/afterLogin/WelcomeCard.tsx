import { createElement, ChevronLeft, ChevronRight } from "lucide";

export function WelcomeCard() {
  const card = (
    <div class="relative bg-linear-to-br from-primary-dark/80 via-primary-dark/50 to-primary-dark/30 rounded-3xl border border-primary/20 overflow-hidden shadow-2xl">
      {/* Animated Background Gradient Orbs */}
      <div class="absolute -top-24 -left-24 w-64 h-64 bg-linear-to-br from-cyan-500/30 via-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div
        class="absolute -bottom-20 -right-20 w-56 h-56 bg-linear-to-tl from-pink-500/30 via-purple-500/20 to-transparent rounded-full blur-3xl animate-pulse"
        style="animation-delay: 1s;"
      ></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-linear-to-r from-primary/10 to-transparent rounded-full blur-2xl"></div>

      {/* Floating Particles */}
      <div class="absolute top-12 left-12 w-1 h-1 bg-cyan-400/60 rounded-full animate-pulse"></div>
      <div
        class="absolute top-20 right-16 w-1.5 h-1.5 bg-pink-400/60 rounded-full animate-pulse"
        style="animation-delay: 0.5s;"
      ></div>
      <div
        class="absolute bottom-24 left-20 w-1 h-1 bg-purple-400/60 rounded-full animate-pulse"
        style="animation-delay: 1.5s;"
      ></div>
      <div
        class="absolute bottom-16 right-24 w-0.5 h-0.5 bg-blue-400/60 rounded-full animate-pulse"
        style="animation-delay: 2s;"
      ></div>

      {/* Slider Container */}
      <div class="relative overflow-hidden h-[520px]">
        <div
          id="slider-track"
          class="flex h-full"
          style="transition: transform 800ms cubic-bezier(0.4, 0, 0.2, 1);"
        >
          {/* Slide 1: Logo Showcase */}
          <div class="min-w-full h-full relative overflow-hidden bg-black">
            {/* Subtle Background Effects */}
            <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>

            {/* Floating Particles */}
            <div class="absolute top-16 left-12 w-1 h-1 bg-primary/40 rounded-full animate-pulse"></div>
            <div
              class="absolute top-24 right-20 w-1.5 h-1.5 bg-cyan-400/40 rounded-full animate-pulse"
              style="animation-delay: 0.5s;"
            ></div>
            <div
              class="absolute bottom-20 left-16 w-1 h-1 bg-pink-400/40 rounded-full animate-pulse"
              style="animation-delay: 1s;"
            ></div>
            <div
              class="absolute bottom-32 right-24 w-1 h-1 bg-purple-400/40 rounded-full animate-pulse"
              style="animation-delay: 1.5s;"
            ></div>

            {/* Center Content */}
            <div class="flex flex-col items-center justify-center h-full relative z-10">
              {/* Logo Circle Container */}
              <div class="relative group">
                {/* Glow Effect */}
                <div class="absolute inset-0 bg-primary/30 rounded-full blur-2xl scale-150 group-hover:scale-[1.7] transition-transform duration-500"></div>

                {/* Circle with Logo, Welcome Text, and Button */}
                <div class="relative bg-black/60 backdrop-blur-lg rounded-full border-2 border-primary/40 group-hover:border-primary/60 transition-all duration-500 shadow-2xl p-16 flex flex-col items-center justify-center">
                  {/* Welcome Text */}
                  <p class="text-primary text-xs font-medium uppercase tracking-[0.4em] mb-6">
                    Welcome To
                  </p>

                  {/* Logo */}
                  <img
                    src="/media/logo/logo.png"
                    alt="VSPACE Logo"
                    class="w-40 h-40 object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500 mb-6"
                  />

                  {/* Start Now Button */}
                  <button class="group/btn relative overflow-hidden bg-linear-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-black font-bold text-sm uppercase tracking-widest px-10 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-primary/40 border-2 border-primary/30 hover:border-white/20">
                    <span class="relative z-10 flex items-center gap-2">
                      <svg
                        class="w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
                      </svg>
                      Start Now
                    </span>
                    <div class="absolute inset-0 bg-white/10 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 skew-x-12"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2: Pong Game Preview */}
          <div class="min-w-full h-full relative overflow-hidden bg-black/30">
            {/* Full Width Game Arena */}
            <div class="absolute inset-0 flex flex-col">
              {/* Header */}
              <div class="text-center py-8 relative z-10">
                <p class="text-primary/90 text-xs font-medium uppercase tracking-[0.4em] mb-2">
                  Classic Mode
                </p>
                <h2 class="text-4xl font-bold tracking-tight mb-3 text-white drop-shadow-[0_4px_12px_rgba(0,217,255,0.5)]">
                  Pong Championship
                </h2>
                <p class="text-white/70 text-sm font-medium px-4">
                  Experience the timeless arcade game reimagined
                </p>
              </div>

              {/* Game Arena - Full Width */}
              <div class="flex-1 relative px-8 pb-20">
                {/* Background Grid Effect */}
                <div class="absolute inset-0 opacity-20">
                  <div
                    class="absolute inset-0"
                    style="background-image: linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px); background-size: 50px 50px;"
                  ></div>
                </div>

                {/* Glow Effects */}
                <div class="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px]"></div>
                <div class="absolute bottom-0 right-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-[100px]"></div>

                <div class="relative h-full bg-black/40 backdrop-blur-sm rounded-2xl border border-primary/30 overflow-hidden">
                  {/* Score Display - Top */}
                  <div class="absolute top-6 left-0 right-0 flex justify-center items-center gap-12 z-10">
                    <div class="text-center">
                      <div class="text-6xl font-bold bg-linear-to-b from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
                        3
                      </div>
                      <div class="text-[10px] text-white/40 uppercase tracking-wider mt-1">
                        Player
                      </div>
                    </div>
                    <div class="w-px h-12 bg-primary/30"></div>
                    <div class="text-center">
                      <div class="text-6xl font-bold bg-linear-to-b from-pink-400 to-pink-600 bg-clip-text text-transparent">
                        2
                      </div>
                      <div class="text-[10px] text-white/40 uppercase tracking-wider mt-1">
                        Opponent
                      </div>
                    </div>
                  </div>

                  {/* Game Play Area */}
                  <div class="absolute inset-0 flex items-center px-8">
                    {/* Left Paddle with Glow */}
                    <div class="relative">
                      <div class="absolute -inset-3 bg-cyan-500/40 rounded-full blur-xl"></div>
                      <div class="relative w-4 h-32 bg-linear-to-b from-cyan-300 via-cyan-400 to-cyan-500 rounded-full shadow-2xl shadow-cyan-500/60"></div>
                    </div>

                    {/* Center Game Area */}
                    <div class="flex-1 relative h-full px-12">
                      {/* Center Net - Segmented */}
                      <div class="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 flex flex-col justify-around py-8">
                        <div class="h-6 bg-primary/40 rounded-full"></div>
                        <div class="h-6 bg-primary/40 rounded-full"></div>
                        <div class="h-6 bg-primary/40 rounded-full"></div>
                        <div class="h-6 bg-primary/40 rounded-full"></div>
                        <div class="h-6 bg-primary/40 rounded-full"></div>
                        <div class="h-6 bg-primary/40 rounded-full"></div>
                        <div class="h-6 bg-primary/40 rounded-full"></div>
                        <div class="h-6 bg-primary/40 rounded-full"></div>
                      </div>

                      {/* Ball with Trail Effect */}
                      <div class="absolute left-1/3 top-1/2 -translate-y-1/2">
                        <div class="absolute -inset-3 bg-primary/40 rounded-full blur-lg"></div>
                        <div class="relative w-5 h-5 bg-primary rounded-full shadow-2xl shadow-primary/80 animate-pulse"></div>
                        <div class="absolute inset-0 w-5 h-5 bg-primary/40 rounded-full animate-ping"></div>
                        {/* Motion Trail */}
                        <div class="absolute -left-8 top-1/2 -translate-y-1/2 w-8 h-1 bg-linear-to-r from-transparent via-primary/50 to-primary/80 blur-sm"></div>
                        <div class="absolute -left-16 top-1/2 -translate-y-1/2 w-10 h-0.5 bg-linear-to-r from-transparent to-primary/30 blur-sm"></div>
                      </div>

                      {/* Floating Particles */}
                      <div class="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-cyan-400/70 rounded-full animate-pulse"></div>
                      <div
                        class="absolute bottom-1/3 right-1/3 w-2 h-2 bg-pink-400/70 rounded-full animate-pulse"
                        style="animation-delay: 0.5s;"
                      ></div>
                      <div
                        class="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-400/70 rounded-full animate-pulse"
                        style="animation-delay: 1s;"
                      ></div>
                      <div
                        class="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-400/70 rounded-full animate-pulse"
                        style="animation-delay: 1.5s;"
                      ></div>
                      <div
                        class="absolute top-2/3 left-2/3 w-1 h-1 bg-primary/70 rounded-full animate-pulse"
                        style="animation-delay: 2s;"
                      ></div>
                    </div>

                    {/* Right Paddle with Glow */}
                    <div class="relative">
                      <div class="absolute -inset-3 bg-pink-500/40 rounded-full blur-xl"></div>
                      <div class="relative w-4 h-32 bg-linear-to-b from-pink-300 via-pink-400 to-pink-500 rounded-full shadow-2xl shadow-pink-500/60"></div>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div class="absolute bottom-0 left-0 right-0 flex justify-center pb-6">
                  <button class="group relative bg-primary hover:bg-primary/90 text-black font-bold px-10 py-3.5 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/40 flex items-center gap-2">
                    <div class="w-0 h-0 border-l-[6px] border-l-current border-y-4 border-y-transparent"></div>
                    <span class="text-sm uppercase tracking-wide">
                      Play Now
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        id="prev-slide"
        class="absolute left-6 bottom-8 z-30 bg-primary/30 hover:bg-primary/50 backdrop-blur-lg border-2 border-primary hover:border-white rounded-full w-8 h-8 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl shadow-primary/30 group"
      ></button>
      <button
        id="next-slide"
        class="absolute right-6 bottom-8 z-30 bg-primary/30 hover:bg-primary/50 backdrop-blur-lg border-2 border-primary hover:border-white rounded-full w-8 h-8 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl shadow-primary/30 group"
      ></button>

      {/* Navigation Dots */}
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        <button class="slider-dot group relative" data-slide="0">
          <div class="w-2 h-2 rounded-full bg-primary transition-all duration-300"></div>
          <div class="absolute inset-0 w-2 h-2 rounded-full bg-primary/50 scale-150 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        </button>
        <button class="slider-dot group relative" data-slide="1">
          <div class="w-2 h-2 rounded-full bg-white/30 group-hover:bg-white/50 transition-all duration-300"></div>
          <div class="absolute inset-0 w-2 h-2 rounded-full bg-white/30 scale-150 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        </button>
      </div>

      {/* Elegant Corner Accents */}
      <div class="absolute top-0 left-0 w-24 h-24 border-t border-l border-primary/20 rounded-tl-3xl pointer-events-none"></div>
      <div class="absolute bottom-0 right-0 w-24 h-24 border-b border-r border-primary/20 rounded-br-3xl pointer-events-none"></div>
      <div class="absolute top-0 left-6 w-8 h-0.5 bg-linear-to-r from-primary/60 to-transparent"></div>
      <div class="absolute bottom-0 right-6 w-8 h-0.5 bg-linear-to-l from-primary/60 to-transparent"></div>
    </div>
  ) as HTMLElement;

  // Setup slider functionality
  const sliderTrack = card.querySelector("#slider-track") as HTMLElement;
  const dots = card.querySelectorAll(".slider-dot");
  const prevBtn = card.querySelector("#prev-slide") as HTMLElement;
  const nextBtn = card.querySelector("#next-slide") as HTMLElement;
  let currentSlide = 0;
  let autoSlideInterval: number;

  const goToSlide = (slideIndex: number) => {
    currentSlide = slideIndex;
    sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Update dots with smooth transition
    dots.forEach((dot, index) => {
      const dotCircle = dot.querySelector("div") as HTMLElement;
      if (index === currentSlide) {
        dotCircle.classList.remove("bg-white/30", "group-hover:bg-white/50");
        dotCircle.classList.add("bg-primary");
      } else {
        dotCircle.classList.remove("bg-primary");
        dotCircle.classList.add("bg-white/30", "group-hover:bg-white/50");
      }
    });
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % 2);
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + 2) % 2);
  };

  // Auto-slide every 8 seconds
  const startAutoSlide = () => {
    autoSlideInterval = setInterval(nextSlide, 8000) as unknown as number;
  };

  const stopAutoSlide = () => {
    clearInterval(autoSlideInterval);
  };

  // Arrow button handlers with timer reset
  prevBtn.addEventListener("click", () => {
    clearInterval(autoSlideInterval);
    prevSlide();
    autoSlideInterval = setInterval(nextSlide, 8000) as unknown as number;
  });

  nextBtn.addEventListener("click", () => {
    clearInterval(autoSlideInterval);
    nextSlide();
    autoSlideInterval = setInterval(nextSlide, 8000) as unknown as number;
  });

  // Dot click handlers
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      clearInterval(autoSlideInterval);
      goToSlide(index);
      autoSlideInterval = setInterval(nextSlide, 8000) as unknown as number;
    });
  });

  // Pause on hover, resume on leave
  card.addEventListener("mouseenter", () => {
    clearInterval(autoSlideInterval);
  });

  card.addEventListener("mouseleave", () => {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, 8000) as unknown as number;
  });

  // Start auto-slide
  startAutoSlide();

  // Add Lucide icons to navigation buttons
  const prevIcon = createElement(ChevronLeft, {
    size: 18,
    strokeWidth: 2.5,
    color: "white",
  });
  prevBtn.appendChild(prevIcon);

  const nextIcon = createElement(ChevronRight, {
    size: 18,
    strokeWidth: 2.5,
    color: "white",
  });
  nextBtn.appendChild(nextIcon);

  return card;
}
