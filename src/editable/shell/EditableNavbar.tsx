'use client'

import { useMemo, useState, type CSSProperties } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, Search, UserPlus, LogIn, X, PlusCircle, MapPin, LogOut, UserCircle2 } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { session, logout } = useEditableLocalAuthSession()
  const brandName = globalContent.site.name
  const navVars = { '--editable-nav-bg': '#ff4a1f', '--editable-nav-text': '#ffffff', '--editable-nav-active': '#ffffff', '--editable-nav-active-text': '#252820', '--editable-cta-bg': '#252820', '--editable-cta-text': '#ffffff', '--editable-search-bg': '#ffffff', '--editable-border': 'rgba(31,36,28,0.14)', '--editable-container': '1160px' } as CSSProperties
  const navItems = useMemo(
    () => [
      { label: 'Businesses', href: '/listing' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    []
  )

  return (
    <header style={navVars} className="sticky top-0 z-50 border-b border-black/10 bg-[var(--editable-nav-bg)] text-[var(--editable-nav-text)] shadow-sm">
      <nav className="mx-auto flex min-h-[70px] w-full max-w-[var(--editable-container)] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex shrink-0 items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-white/25 bg-white shadow-sm transition-transform group-hover:-rotate-2">
            <img src="/favicon.png?v=20260413" alt={brandName} className="h-8 w-8 object-contain" />
          </span>
          <span className="hidden min-w-0 sm:block">
            <span className="block max-w-[190px] truncate text-xl font-black tracking-[-0.04em]">{brandName}</span>
            <span className="block max-w-[190px] truncate text-[10px] font-bold uppercase tracking-[0.16em] text-white/75">{globalContent.nav?.tagline || SITE_CONFIG.tagline}</span>
          </span>
        </Link>

        <form action="/search" className="mx-auto hidden min-w-0 flex-1 justify-center md:flex">
          <label className="relative flex w-full max-w-[470px] items-center overflow-hidden rounded-md border border-white/25 bg-[var(--editable-search-bg)] text-[#252820] shadow-sm">
            <Search className="ml-3 h-4 w-4 text-[#6f7669]" />
            <input name="q" type="search" placeholder="Look for a business..." className="min-w-0 flex-1 bg-transparent px-2 py-2.5 text-sm font-semibold outline-none placeholder:text-[#6f7669]" />
            
            <button className="h-10 bg-[#252820] px-5 text-xs font-black uppercase tracking-[0.12em] text-white">Find</button>
          </label>
        </form>

        <div className="hidden items-center gap-2 lg:flex">
          {navItems.slice(0, 4).map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
            return (
              <Link key={item.href} href={item.href} className={`rounded-full px-3 py-2 text-sm font-black transition ${active ? 'bg-[var(--editable-nav-active)] text-[var(--editable-nav-active-text)]' : 'hover:bg-white/15'}`}>
                {item.label}
              </Link>
            )
          })}
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          {session ? (
            <>
              <Link href="/create" className="hidden items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-black text-[#252820] shadow-sm sm:inline-flex"><PlusCircle className="h-4 w-4" /> Add Business</Link>
              <span className="hidden max-w-[150px] items-center gap-2 rounded-full border border-white/25 px-3 py-2 text-sm font-black sm:inline-flex"><UserCircle2 className="h-4 w-4" /><span className="truncate">{session.name}</span></span>
              <button type="button" onClick={logout} className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-black hover:bg-white/15 sm:inline-flex"><LogOut className="h-4 w-4" /> Logout</button>
            </>
          ) : (
            <>
              <Link href="/create" className="hidden items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-black text-[#252820] shadow-sm sm:inline-flex"><PlusCircle className="h-4 w-4" /> Add Business</Link>
              <Link href="/login" className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-black hover:bg-white/15 sm:inline-flex"><LogIn className="h-4 w-4" /> Log in</Link>
              <Link href="/signup" className="hidden items-center gap-2 rounded-full bg-[#252820] px-4 py-2.5 text-sm font-black text-white shadow-sm sm:inline-flex"><UserPlus className="h-4 w-4" /> Sign up</Link>
            </>
          )}
          <button type="button" onClick={() => setOpen((value) => !value)} className="rounded-full border border-white/25 bg-white p-2 text-[#252820] lg:hidden" aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-white/20 bg-[var(--editable-nav-bg)] px-4 py-4 lg:hidden">
          <form action="/search" className="mb-4 flex rounded-xl border border-white/25 bg-white px-3 py-2 text-[#252820]">
            <Search className="mt-1 h-4 w-4 opacity-55" />
            <input name="q" type="search" placeholder="Search businesses" className="min-w-0 flex-1 bg-transparent px-3 text-sm outline-none" />
          </form>
          <div className="grid gap-2">
            {[{ label: 'Home', href: '/' }, ...navItems, ...(session ? [{ label: session.name, href: '/create' }, { label: 'Add Business', href: '/create' }] : [{ label: 'Login', href: '/login' }, { label: 'Sign up', href: '/signup' }])].map((item) => (
              <Link key={`${item.href}-${item.label}`} href={item.href} onClick={() => setOpen(false)} className="rounded-xl border border-white/25 bg-white px-4 py-3 text-sm font-black text-[#252820]">
                {item.label}
              </Link>
            ))}
            {session ? <button type="button" onClick={() => { logout(); setOpen(false) }} className="rounded-xl border border-white/25 bg-[#252820] px-4 py-3 text-left text-sm font-black text-white">Logout</button> : null}
          </div>
        </div>
      ) : null}
    </header>
  )
}
