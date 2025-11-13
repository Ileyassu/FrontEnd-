export interface SignUpButton {
    text ?: string,
    signup ?: boolean
}

export function SignUpBtn({text, signup}:SignUpButton){
    return (
        <div>
            <a class="w-full inline-block text-center py-2 rounded-lg text-primary font-semibold text-[17px] my-5 border-primary border-solid border" href={signup ? "/signup" : "/signin"}>{text}</a>
        </div>
    );
}