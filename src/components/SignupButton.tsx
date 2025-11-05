import {createElement, ArrowUpRight} from "lucide"

export function SignupButton (){
    const linkE = (
    <a href="/signup" class="flex gap-4 font-semibold text-shadow-md border text-primary px-10 py-2 rounded-lg">
        <span class="text-primary drop-shadow-[0_12px_16px_rgba(0,0,0,0.55)]">
            Sign Up
        </span>
    </a>

    ) as HTMLElement;
        const iconElement = createElement(ArrowUpRight, { size: 26, strokeWidth: 6 , color:"primary"});

    linkE.appendChild(iconElement);
    return linkE;
}