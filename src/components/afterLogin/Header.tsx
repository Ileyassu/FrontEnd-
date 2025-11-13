export function Header() {
    return (
        <header class="absolute">
            <nav class="px-35 py-15 mx-auto flex items-center justify-between">
                <a href="/Dashboard">
                    <img class=" w-55" src= "/media/logo/logo.png" alt="logo"/>
                </a>
            </nav>
        </header>
    ) as HTMLElement;
}