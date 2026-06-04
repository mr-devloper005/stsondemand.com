import { Building2, CheckCircle2, MapPin, Search } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { globalContent } from '@/editable/content/global.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function AboutPage() {
  const metrics = [
    { title: 'Search intent', body: 'Find businesses by service, location, or name.', icon: Search },
    { title: 'Local context', body: 'Profiles can carry addresses, categories, and service areas.', icon: MapPin },
    { title: 'Owner visibility', body: 'Create stronger listings with details customers need.', icon: Building2 },
  ]

  return (
    <EditableSiteShell>
      <main className="bg-[var(--editable-page-bg,#f4f1e6)] px-4 py-12 text-[var(--editable-page-text,#1f241c)] sm:px-6 lg:px-8 lg:py-16">
        <section className="mx-auto grid max-w-[var(--editable-container)] gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-xl border border-[var(--editable-border)] bg-white p-8 shadow-sm lg:p-10">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#ff4a1f]">{pagesContent.about.badge}</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[1.04] tracking-[-0.04em] sm:text-5xl">About {globalContent.site.name}</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 opacity-70">{pagesContent.about.description}</p>
            <div className="mt-8 space-y-4 text-sm leading-8 opacity-75">
              {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </article>
          <aside className="space-y-4">
            {metrics.map(({ title, body, icon: Icon }) => (
              <div key={title} className="rounded-xl bg-[#252820] p-5 text-white shadow-sm">
                <Icon className="h-5 w-5 text-[#ff4a1f]" />
                <h2 className="mt-3 text-xl font-black tracking-[-0.03em]">{title}</h2>
                <p className="mt-2 text-sm leading-7 text-white/70">{body}</p>
              </div>
            ))}
            {pagesContent.about.values.map((value) => (
              <div key={value.title} className="rounded-xl border border-[var(--editable-border)] bg-white p-6 shadow-sm">
                <h2 className="inline-flex items-center gap-2 text-xl font-black tracking-[-0.04em]"><CheckCircle2 className="h-5 w-5 text-[#08a65a]" /> {value.title}</h2>
                <p className="mt-3 text-sm leading-7 opacity-70">{value.description}</p>
              </div>
            ))}
          </aside>
        </section>
      </main>
    </EditableSiteShell>
  )
}
