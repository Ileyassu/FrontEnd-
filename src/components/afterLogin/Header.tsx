import { ProfileIcon } from "./ProfileIcon";

export function Header() {
  return (
     <header class="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <nav class="px-15 py-15 mx-auto flex items-center justify-between">
        <div class="flex align-center items-center gap-4 w-[80%]">
          <a class="mr-20" href="/Dashboard">
            <img class="w-55" src="/media/logo/logo.png" alt="logo" />
          </a>
          <input
            type="text"
            class="p-2 rounded-[10px] h-15 pl-8 text-secondary font-light border-1 border-secondary-text bg-transparent placeholder:text-secondary/60 w-150"
            placeholder="Search, users..."
          />
        </div>
        <ProfileIcon />
      </nav>
    </header>
  ) as HTMLElement;
}

