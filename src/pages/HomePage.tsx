import { Header } from "../components/Header";
import { HeroBackground } from "../components/BgContainer";
import { Footer } from "@/components/footer";

export function HomePage() {
  const header = Header({
    title: "Ft_Trescendence",
    links : [
      {name : "Signup", url : "signup"},
      {name : "Login", url: "login"}
    ]
  });
  const heroBg = HeroBackground();
  const main = (
    <div class="min-h-screen flex items-center px-8 lg:px-16">
      <div class="w-full">
        <div class="text-white space-y-6 max-w-2xl">
          <h1 class="pl-20 text-9xl lg:text-9xl font-normal">Let's Play Together...</h1>
          <p class="pl-25 pt-10 pr-30 font-bold text-[#878787]">Step into the ultimate ping pong 
              experience where every serve sizzles and every rally heats up.
          </p>
        </div>
      </div>

    </div>
  ) as HTMLElement;
  const container = (
    <div>
      <HeroBackground/>
    </div>
  )
  container.append(header);
  container.append(main);
  container.append(Footer());
  return container;
}