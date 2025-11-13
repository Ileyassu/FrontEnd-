export interface fotitoIcons {
    text ?: string,
    path ?: string,
    link ?: string,
}


export function FotitoLogin({path, link, text} : fotitoIcons) {
    return (
        <div class="">
            <img class="cursor-pointer border-solid border-[1.8px] border-primary py-2 px-7 rounded-lg" href={link} src={path} alt="loginIcon"/>
        </div>
    ) as HTMLElement;
}