import { Header } from "../components/Header";

export function HomePage() {
  const header = Header({
    title: "Ft_Trescendence",
    links : [
      {name : "Home", url : "/"},
      {name : "Signup", url : "signup"}
    ]
  });
  const main = (
    <div class="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center p-4">
      <div class="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">
          Welcome Home! 🏠
        </h1>
        <p class="text-gray-600 mb-6">
          Get ready for transcendence
        </p>
        <a 
          href="/signup"
          class="block w-full bg-purple-600 hover:bg-purple-700 text-white text-center font-bold py-3 px-6 rounded-lg transition-colors"
        >
          Sign Up →
        </a>
      </div>
    </div>
  ) as HTMLElement;
  const container = (
    <div>
      {}
    </div>
  )
  container.append(header);
  container.append(main);
  return container;
}