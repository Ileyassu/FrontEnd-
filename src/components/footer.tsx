import { AboutUs } from "./AboutUs";

export function Footer (){
    return (
        <div class="absolute bottom-15 left-0 right-0 flex justify-between items-center px-40">
            <p class="text-secondary-text text-sm">
                © 2025 VOID SPACE<br/>
                Made By 26TOXIC26
            </p>
            <AboutUs/>
        </div>
    ) as HTMLElement;
}