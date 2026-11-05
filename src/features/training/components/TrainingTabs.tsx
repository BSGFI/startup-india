'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
const links=[['All programs','/training'],['Live training','/training/live'],['Bootcamps','/training/bootcamps']];
export default function TrainingTabs(){const pathname=usePathname();return <nav aria-label="Training formats" className="border-b border-slate-200 bg-white"><div className="container-custom flex flex-wrap gap-2 py-4">{links.map(([name,href])=><Link key={href} href={href} aria-current={pathname===href?'page':undefined} className={'rounded-xl px-5 py-3 text-sm font-bold transition-colors '+(pathname===href?'bg-brand-green-light text-brand-green-dark':'text-slate-600 hover:bg-slate-50')}>{name}</Link>)}</div></nav>}
