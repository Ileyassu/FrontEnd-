import { ArrowUpRight, createElement } from "lucide";

export function LoginButton (){
    const linkE = (
    <a href="/login" class="flex gap-4 font-semibold text-shadow-md  text-primary-text px-10 py-2 rounded-lg bg-secondary ">
        <span class="text-black drop-shadow-[0_12px_16px_rgba(0,0,0,0.55)]">Login</span>
    </a>

    ) as HTMLElement;
        const iconElement = createElement(ArrowUpRight, { size: 26, strokeWidth: 6 , color:"#000"});

    linkE.appendChild(iconElement);
    return linkE;
}