
export interface HeaderProps {
    title ?: string;
    links ?: { name : string, url : string }[];
};

export function Header (props : HeaderProps = {}) : HTMLElement {
    const title = props.title || "Trescendence";
    const links = props.links || [];

    return (
        <header>
            <nav class="px-35 py-10">
                <a href="/">
                    <img class=" w-55" src= "/media/logo/logo.png" alt="logo"/>   
                </a> 
            </nav>
        </header>
    );
}