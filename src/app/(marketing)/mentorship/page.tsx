import {MentorshipOverview} from '@/features/mentorship';
import {site} from '@/config/site';
export const metadata={title:'One-to-One Mentorship | '+site.name,description:'Explore focused guidance for development, design, data, projects and your learning roadmap.'};
export default function Page(){return <MentorshipOverview/>;}
