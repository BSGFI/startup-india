import Link from 'next/link';
import {MessagesSquare, CheckCircle2, ArrowUpRight} from 'lucide-react';
export default function MentorshipHeader() {
  return <section className="section hero-gradient border-b border-slate-100">
    <div className="container-custom grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
      <div><p className="eyebrow mb-5">One-to-one mentorship</p><h1 className="hero-heading">A clearer next step starts with a conversation.</h1><p className="lead mt-6 max-w-2xl">Bring your questions, your project or an idea you want to explore. Get focused guidance built around where you are and what you want to do next.</p><div className="mt-8 flex flex-wrap gap-3"><Link href="/mentorship/book" className="btn-primary">Request a session <ArrowUpRight size={18}/></Link><Link href="#focus-areas" className="btn-outline">Explore focus areas</Link></div></div>
      <aside className="rounded-3xl border border-green-100 bg-white p-8 shadow-sm"><MessagesSquare size={42} className="mb-6 text-brand-green-dark"/><p className="eyebrow mb-3">Your questions. Your goals.</p><h2 className="text-2xl font-bold">Make space for progress.</h2><ul className="mt-6 space-y-4">{['Talk through a specific challenge','Get feedback on your approach','Leave with actions to work on'].map(text=><li key={text} className="flex gap-3 text-slate-600"><CheckCircle2 size={20} className="shrink-0 text-brand-green-dark"/>{text}</li>)}</ul></aside>
    </div>
  </section>;
}
