import { Header } from "@/components/Header";
import { HeroBackground } from "@/components/BgContainer";
import { Footer } from "@/components/footer";
import { SignUpForm } from "@/components/forms/SignupForm";

const header = Header({
    title: "Ft_Trescendence",
    links : [
      {name : "Login", url: "login"}
        ]
    })

export function SignupPage (){
    const container = (
        <div >
            <HeroBackground/>
        </div>
    ) as HTMLElement;
    container.append(header)
    container.append(SignUpForm());
    container.append(Footer())

    return container;
}