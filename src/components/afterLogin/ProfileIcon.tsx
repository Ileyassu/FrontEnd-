import {} from "lucide-react"

export function ProfileIcon() {
    return (
        <div class="flex flex-row justify-center items-center">
            <a class="mr-4" href="/profile">
                <img src="/media/avatar/avatar.png" class="rounded-b-full w-full"alt="" />
            </a>
            <p class="text-secondary pr-2">UserName</p>
            <img class="w-3" src="/media/heart.svg" alt="" srcset="" />
        </div>
    )
}
