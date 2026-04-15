import Image from 'next/image'
import Link from 'next/link'

export default function StoreLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <header className="border-b border-[#2A2A2A] px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/catalogo">
            <Image
              src="/logo_combined_dark.png"
              alt="Guto Fernandes Endurance Coach"
              width={200}
              height={48}
              className="h-10 w-auto"
            />
          </Link>
          <Link
            href="/login"
            className="text-sm text-[#888888] hover:text-white transition-colors"
          >
            Entrar
          </Link>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-6 py-12">{children}</main>
      <footer className="border-t border-[#2A2A2A] mt-20 px-6 py-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Image
            src="/logo_symbol.png"
            alt="GF"
            width={32}
            height={32}
            className="h-8 w-auto opacity-60"
          />
          <p className="text-xs text-[#888888]">
            © {new Date().getFullYear()} Guto Fernandes Endurance Coach
          </p>
        </div>
      </footer>
    </div>
  )
}
