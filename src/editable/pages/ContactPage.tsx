'use client'

import { Building2, Mail, MapPin, Phone } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function ContactPage() {
  const lanes = [
    { icon: Building2, title: 'Add or claim a listing', body: 'Get help submitting a business, improving profile details, or preparing an owner-ready listing.' },
    { icon: MapPin, title: 'Fix location details', body: 'Send corrections for addresses, categories, service areas, map placement, or duplicated business records.' },
    { icon: Phone, title: 'Improve contact accuracy', body: 'Update phone numbers, websites, descriptions, photos, and customer-facing profile information.' },
  ]

  return (
    <EditableSiteShell>
      <main className="bg-[var(--editable-page-bg,#f4f1e6)] text-[var(--editable-page-text,#1f241c)]">
        <section className="mx-auto grid max-w-[var(--editable-container)] gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-16">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#ff4a1f]">{pagesContent.contact.eyebrow}</p>
            <h1 className="mt-4 max-w-xl text-4xl font-black leading-[1.03] tracking-[-0.04em] sm:text-5xl">{pagesContent.contact.title}</h1>
            <p className="mt-5 max-w-2xl text-sm font-semibold leading-8 text-[#566052]">{pagesContent.contact.description}</p>
            <div className="mt-8 grid gap-4">
              {lanes.map((lane) => (
                <div key={lane.title} className="rounded-xl border border-[var(--editable-border)] bg-white p-5 shadow-sm">
                  <lane.icon className="h-5 w-5 text-[#ff4a1f]" />
                  <h2 className="mt-3 text-xl font-black tracking-[-0.03em]">{lane.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-[#566052]">{lane.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-[var(--editable-border)] bg-white p-5 shadow-[0_24px_70px_rgba(31,36,28,0.10)] sm:p-7">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#ffe5da] text-[#ff4a1f]"><Mail className="h-5 w-5" /></span>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#72796c]">Directory support</p>
                <h2 className="text-2xl font-black tracking-[-0.04em]">{pagesContent.contact.formTitle}</h2>
              </div>
            </div>
            <div className="mt-5">
              <EditableContactLeadForm />
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
