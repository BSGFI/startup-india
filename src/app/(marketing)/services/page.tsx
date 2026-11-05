import { ServicesSection } from '@/features/services';
import { site } from '@/config/site';
export const metadata = { title: 'Services | ' + site.name };
export default function Page() { return <><ServicesSection /></>; }
