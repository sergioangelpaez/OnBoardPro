export default function Home() {
  return (
    <div
      className="relative w-full h-[100dvh] bg-cover bg-center text-text-main"
      style={{ backgroundImage: "url('/ucentralbg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <div className="flex items-center h-full z-10  p-10">
        <div className="relative bg-card-bg p-8 rounded-sm shadow-lg w-1/4">
          <div className="border-border border-b-1 pb-5">
            <span className="text-text-secondary">Ingresa a</span>
            <h1 className="text-brand text-3xl font-bold">Onboard Pro</h1>
          </div>
          <form action="submit">
            <div className="flex flex-col">
              <input type="email" placeholder="email" />
              <input type="password" placeholder="password" />
              <button></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
