import type { Metadata } from 'next'
import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalSignupForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/signup', title: 'Sign up', description: pagesContent.auth.signup.metadataDescription })
}

export default function SignupPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--editable-page-text,#2f1d16)] text-[var(--editable-page-bg,#fff4e4)]">
        <section className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-[var(--editable-container)] items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.82fr_1fr] lg:px-8">
          <div className="rounded-xl border border-white/10 bg-white p-6 text-[#1f241c] shadow-[0_24px_70px_rgba(0,0,0,0.22)] sm:p-8">
            <h1 className="text-3xl font-black tracking-[-0.05em]">{pagesContent.auth.signup.formTitle}</h1>
            <EditableLocalSignupForm />
            <p className="mt-5 text-sm text-[#566052]">Already have an account? <Link href="/login" className="font-black text-[#ff4a1f] underline-offset-4 hover:underline">{pagesContent.auth.signup.loginCta}</Link></p>
          </div>
          <div className="rounded-xl bg-[#a1062c] p-8 text-white">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-white/60">{pagesContent.auth.signup.badge}</p>
            <h2 className="mt-5 max-w-xl text-4xl font-black leading-[1.02] tracking-[-0.04em] sm:text-5xl">{pagesContent.auth.signup.title}</h2>
            <p className="mt-6 max-w-lg text-sm leading-8 text-white/68">{pagesContent.auth.signup.description}</p>
            <div className="mt-8 grid gap-3 text-sm font-bold text-white/75">
              <p>Add contact details customers can trust.</p>
              <p>Submit service categories and descriptions.</p>
              <p>Build a stronger business profile over time.</p>
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
