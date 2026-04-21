import Image from 'next/image';

export default function Footer() {
  return (
    <footer
      className="py-12 px-6 border-t border-zinc-100 dark:border-white/5"
      style={{ background: 'var(--section-b)' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Image
            src="/screenshots/fiorino.jpg"
            alt="Lucro Real"
            width={48}
            height={48}
            className="object-contain mix-blend-multiply dark:mix-blend-normal dark:brightness-90"
          />
          <span className="font-black text-base text-orange-500 tracking-tight">
            LUCRO REAL
          </span>
        </div>

        <p className="text-zinc-400 dark:text-zinc-600 text-xs">
          © {new Date().getFullYear()} Lucro Real. Todos os direitos reservados.
        </p>

        <div className="flex items-center gap-6">
          {['Privacidade', 'Termos', 'Contato'].map((label) => (
            <a
              key={label}
              href="#"
              className="text-zinc-400 hover:text-zinc-700 dark:text-zinc-600 dark:hover:text-zinc-400 text-xs transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
