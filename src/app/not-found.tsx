import Link from 'next/link';
export default function NotFound() { return <section className="section text-center"><h1 className="heading">Page not found</h1><p className="lead my-6">The page you requested could not be found.</p><Link href="/" className="btn-primary">Back to home</Link></section>; }
