export interface HeroBackground {
  displayImg ?: boolean
}

export function HeroBackground({displayImg = true} :HeroBackground = {}) {
  return (
    <div class="fixed inset-0 -z-10 overflow-hidden">
        <div class="absolute right-[-10%] top-[25%] w-150 h-150 bg-primary rounded-full blur-[100px]"></div>
        <img src="./media/assets/shape.png" alt="" srcset="" class="absolute right-0 top-[20%] h-[80vh]" style={displayImg ? "" : "display:none"} />
    </div>
  ) as HTMLElement;
}
