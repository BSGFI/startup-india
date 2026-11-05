import { AboutSection, MissionVision } from '@/features/about';
import { site } from '@/config/site';
export const metadata = { title: 'About | ' + site.name };
export default function Page() { return <><AboutSection /><MissionVision /></>; }
