import {InternshipSection} from '@/features/internships';
import InternshipPageHeader from '@/features/internships/components/InternshipPageHeader';
import {site} from '@/config/site';
export const metadata={title:'Explore Internships | '+site.name,description:'Explore six practical internship learning tracks and find your next project.'};
export default function Page(){return <><InternshipPageHeader label="Explore" title="Your next step starts with something you build." description="Find a track that matches your interests, explore the skills you can practice, and tell us what you want to learn."/><InternshipSection/></>}