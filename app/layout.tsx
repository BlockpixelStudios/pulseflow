import "./globals.css";

export const metadata = {
  title: "PulseFlow",
  description: "Uma rede social acolhedora, humana e unificada.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-neutral-950 text-white">
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="w-64 bg-neutral-900 p-4 hidden md:block">
            <h1 className="text-xl font-bold text-yellow-400">
              PulseFlow
            </h1>

            <nav className="mt-6 flex flex-col gap-3 text-sm">
              <a href="/feed" className="hover:text-yellow-400">Feed</a>
              <a href="/communities" className="hover:text-yellow-400">Comunidades</a>
              <a href="/chat" className="hover:text-yellow-400">Chats</a>
              <a href="/profile" className="hover:text-yellow-400">Perfil</a>
              <a href="/settings" className="hover:text-yellow-400">Configurações</a>
            </nav>
          </aside>

          {/* Conteúdo */}
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
