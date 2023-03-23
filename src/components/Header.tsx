import { Moon, Search } from 'lucide-react'

export function Header() {
  return (
    <header className="fixed top-0 left-80 right-0 px-8 py-3 border-b border-white/10 backdrop-blur flex items-center justify-between">
      <button className="w-full max-w-md flex items-center gap-3 text-xs text-zinc-400 bg-white/5 border border-white/10 px-3 h-8 rounded-full">
        <Search size={14} />
        <span>Find something...</span>
      </button>

      <div className="flex items-center">
        <nav className="text-sm flex items-center gap-6">
          <a className="text-zinc-400 hover:text-zinc-100 transition-colors" href="">API</a>
          <a className="text-zinc-400 hover:text-zinc-100 transition-colors" href="">Documentation</a>
          <a className="text-zinc-400 hover:text-zinc-100 transition-colors" href="">Support</a>
        </nav>

        <div className="flex items-center border-l border-white/10 pl-6 ml-6 gap-6">
          <button>
            <Moon size={14} className="text-zinc-100" />
          </button>

          <button className="border border-cyan-800 bg-cyan-400/10 text-cyan-400 px-3 py-0.5 rounded-full text-sm font-medium hover:border-cyan-400 transition-colors">
            Sign in
          </button>
        </div>
      </div>
    </header>
  )
}