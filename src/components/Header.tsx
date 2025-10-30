
export interface HeaderProps {
    title ?: string;
    links ?: { name : string, url : string }[];
};

export function Header (props : HeaderProps = {}) : HTMLElement {
    const title = props.title || "Trescendence";
    const links = props.links || [];

    return (
        <header>
            <nav class="px-35 mx-auto flex items-center justify-between">
                <a href="/">
                    <img class=" w-55" src= "/media/logo/logo.png" alt="logo"/>
                </a> 
                <div class="flex gap-6">
                    {links.map(link => (
                        link.name.toLowerCase() === "login" ? (
                            <a href="/login" class="text-primary border-solid border-1 border-primary px-10 py-2 rounded-lg">{link.name}</a>
                        ) : (
                            <a href=""></a>
                        )
                    ))}
                </div>
            </nav>
        </header>
    );
}