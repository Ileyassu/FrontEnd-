import {LoginButton} from "./LoginButton"
import { SignupButton } from "./SignupButton";
export interface HeaderProps {
    title ?: string;
    links ?: { name : string, url : string }[];
};

export function Header (props : HeaderProps = {}) : HTMLElement {
    const title = props.title || "Trescendence";
    const links = props.links || [];

    return (
        <header class="absolute top-0 left-0 right-0 z-50 bg-transparent">
            <nav class="px-35 py-10 mx-auto flex items-center justify-between">
                <a href="/">
                    <img class=" w-40" src= "/media/logo/logo.png" alt="logo"/>
                </a> 
                <div class="flex gap-6">
                    {links.map(link => (
                        link.name.toLowerCase() === "login" ? (
                            <LoginButton class="flex flex-row c"/>
                        ) : (
                            <SignupButton/>
                        )
                    ))}
                </div>
            </nav>
        </header>
    );
}