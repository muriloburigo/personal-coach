import { LayoutDashboard, ShoppingBag, ShoppingCart, Users, LogOut } from 'lucide-react'
import Link from 'next/link'

const NAV = [
  { href: '/admin/dashboard', label: 'Dashboard', Icon: LayoutDashboard },
  { href: '/admin/produtos',  label: 'Produtos',  Icon: ShoppingBag },
  { href: '/admin/pedidos',   label: 'Pedidos',   Icon: ShoppingCart },
  { href: '/admin/clientes',  label: 'Clientes',  Icon: Users },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-950 flex">
      <aside className="w-56 bg-zinc-900 border-r border-zinc-800 flex flex-col">
        <div className="px-5 py-6 border-b border-zinc-800">
          <p className="text-white font-bold">Personal Coach</p>
          <p className="text-zinc-500 text-xs mt-0.5">Admin</p>
        </div>
        <nav className="flex-1 p-3 space-y-0.5">
          {NAV.map(({ href, label, Icon }) => (
            <Link key={href} href={href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors">
              <Icon size={16} className="shrink-0" />
              {label}
            </Link>
          ))}
        </nav>
        <div className="p-3 border-t border-zinc-800">
          <form action="/api/auth/logout" method="POST">
            <button className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors">
              <LogOut size={16} className="shrink-0" />
              Sair
            </button>
          </form>
        </div>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  )
}
