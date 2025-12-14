export default function FeedPage() {
  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-6">
      <h2 className="text-2xl font-bold">Feed</h2>

      {/* Post fake (temporário) */}
      <div className="bg-neutral-900 p-4 rounded-xl">
        <p className="font-semibold text-yellow-400">
          @blockpixel
        </p>
        <p className="mt-2 text-neutral-200">
          Bem-vindo ao PulseFlow 🫀  
          Aqui a comunidade vem antes da viralização.
        </p>
      </div>

      <div className="bg-neutral-900 p-4 rounded-xl">
        <p className="font-semibold text-yellow-400">
          @você
        </p>
        <p className="mt-2 text-neutral-200">
          Primeiro post do PulseFlow 🔥  
          #semprecomenergia
        </p>
      </div>
    </div>
  );
}
