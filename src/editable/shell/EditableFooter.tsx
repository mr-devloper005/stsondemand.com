'use client'

import Link from 'next/link'
import type { CSSProperties } from 'react'
import { ArrowUpRight, PlusCircle } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const footerVars = { '--editable-footer-bg': '#252820', '--editable-footer-text': '#ffffff' } as CSSProperties
  const taskLinks = SITE_CONFIG.tasks.filter((task) => task.enabled)
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()
  const brandName = globalContent.site.name
  const popular = ['Restaurants', 'Legal Services', 'Home Repair', 'Health Care', 'Real Estate', 'Marketing', 'Web Development', 'Financial Services']

  return (
    <footer style={footerVars} className="border-t border-black/10 bg-[var(--editable-footer-bg)] text-[var(--editable-footer-text)]">
      <div className="border-b border-white/10 bg-[#a1062c]">
        <div className="mx-auto flex max-w-[var(--editable-container)] flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
          <p className="text-sm font-black">Ready to improve your local visibility?</p>
          <Link href="/create" className="inline-flex items-center gap-2 rounded-md bg-[#08a65a] px-4 py-2 text-sm font-black text-white">
            <PlusCircle className="h-4 w-4" /> Add Business
          </Link>
        </div>
      </div>

      <div className="mx-auto grid max-w-[var(--editable-container)] gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.15fr_1.25fr_0.75fr] lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-white/15 bg-white">
              <img src="/favicon.png?v=20260413" alt={brandName} className="h-9 w-9 object-contain" />
            </span>
            <span className="text-2xl font-black tracking-[-0.04em]">{brandName}</span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/70">{globalContent.footer.description}</p>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.22em] text-white/55">Popular Searches</h3>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {taskLinks.filter((task) => ['listing', 'profile', 'classified', 'sbm'].includes(task.key)).map((task) => (
              <Link key={task.key} href={task.route} className="inline-flex items-center gap-2 text-sm font-bold text-white/75 hover:text-white">
                {task.label} <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            ))}
            {popular.map((label) => (
              <Link key={label} href={`/search?q=${encodeURIComponent(label)}`} className="text-sm font-bold text-white/75 hover:text-white">{label}</Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.22em] text-white/55">Directory Links</h3>
          <div className="mt-4 grid gap-2">
            {[
              ['Business Owners', '/create'],
              ['About Us', '/about'],
              ['Contact Us', '/contact'],
              ['Search', '/search'],
              ...(session ? [['Create Listing', '/create']] : [['Login', '/login'], ['Sign up', '/signup']]),
            ].map(([label, href]) => (
              <Link key={`${href}-${label}`} href={href} className="text-sm font-bold text-white/75 hover:text-white">{label}</Link>
            ))}
            {session ? <button type="button" onClick={logout} className="text-left text-sm font-bold text-white/75 hover:text-white">Logout</button> : null}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-xs font-bold text-white/55">
        © {year} {brandName}. Business data and listings remain with their respective owners.
      </div>
    </footer>
  )
}
