import { Footer } from "@/components/footer";
import { Header } from "@/components/Header";
import { HeroBackground } from "@/components/BgContainer";
import { LoginForm } from "@/components/forms/LoginForm";
export function LoginPage () {
    const header = Header({
    title: "Ft_Trescendence",
    links : [
      {name : "Signup", url : "signup"},
        ]
    })
    const container = (
        <div>
            <HeroBackground/>
        </div>
    ) as HTMLElement;
    container.append(header);
    container.append(LoginForm());
    container.append(Footer());
    return container;
}