import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { site } from '@/config/site';
export const metadata: Metadata = { metadataBase: new URL(site.url), title: site.name, description: site.description };
export default function RootLayout({ children }: {
    children: React.ReactNode;
}) { return <html lang="en"><body><Navbar /><main>{children}</main><Footer /></body></html>; }
