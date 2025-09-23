import Link from "next/link";

const Header = () => {
  return (
    <header className="text-white w-full bg-brand p-5 flex items-center justify-between shadow-lg shadow-black/40 z-10">
      <h1 className="text-3xl font-semibold">Onboard Pro</h1>
      <nav aria-label="Main navigation">
        <ul className="flex gap-7">
          <li>
            <Link href="/courses" className="text-white/80 hover:text-white">
              Mis Cursos
            </Link>
          </li>
          <li>
            <Link href="/explore" className="text-white/80 hover:text-white">
              Explora
            </Link>
          </li>
          <li>
            <Link href="/community" className="text-white/80 hover:text-white">
              Comunidad
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <div className="rounded-full flex items-center justify-center bg-white w-8 h-8">
          <p className="text-brand">S</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
