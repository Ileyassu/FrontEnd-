import { SignUpBtn } from "./SignUpBtn";
import { FotitoLogin } from "../social Login Icons/fotitoLogin";
export function LoginForm(){
    return (
        <div class="pt-65 flex items-center justify-center py-9">
            <div class="flex flex-col gap-10 items-center justify-center relative w-full max-w-md py-12 px-20 rounded-4xl "
                 style="background: transparent; position: relative;">
                <div style=" position: absolute; inset: 0; border-radius: inherit; padding: 2px; background: linear-gradient(135deg, rgba(0, 217, 255, 0.8), rgba(0, 217, 255, 0.3), transparent); -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none;"></div>
                <h1 class="text-white text-3xl font-semibold">Login</h1>

                <div class=" w-full flex gap-2 flex-col text-white text-[14px] font-light">
                    <label class="mt-2" htmlFor="Username">Username</label>
                    <input class="bg-white text-black h-9 rounded-md px-3" type="text" id="username"  placeholder="Username" />
                    <label class="mt-2" htmlFor="Password">Password</label>
                    <input class="bg-white text-black h-9 rounded-md px-3" type="Password" id="Password"  placeholder="Password" />
                    <a href="forgotPassword text-[10px]">Forgot Password</a>
                    <SignUpBtn text="Sign in" signup={false} />
                    <p class="mb-5 w-full text-center">or continue with</p>
                    <div class="flex justify-between mb-5">
                        <FotitoLogin path="/media/assets/social-icons/google-icon.svg" link="#google"/>
                        <FotitoLogin path="/media/assets/social-icons/github-icon.svg" link="#google"/>
                        <FotitoLogin path="/media/assets/social-icons/42icon.svg" link="#google"/>
                    </div>
                    <p>Don’t have an account yet? <a class="text-primary cursor-pointer" href="/signup">Sign up Now!</a></p>
                </div>
            </div>
        </div>
    ) as HTMLElement;
}