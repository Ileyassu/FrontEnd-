import { Header } from "@/components/afterLogin/Header";
import { HeroBackground } from "@/components/BgContainer";

export function Dashboard() {
    return (
        <div>
            <Header/>
            <HeroBackground displayImg={false}/>
        </div>
    ) as HTMLElement;
}