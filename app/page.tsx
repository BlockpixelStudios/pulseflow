export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center gap-6">
      <h1 className="text-4xl font-bold text-yellow-400">
        PulseFlow 🫀
      </h1>

      <p className="max-w-md text-neutral-300">
        Uma rede social acolhedora, feita para pessoas —  
        não para algoritmos predatórios.
      </p>

      <a
        href="/feed"
        className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:opacity-90"
      >
        Entrar no Flow 🚀
      </a>
    </div>
  );
}
