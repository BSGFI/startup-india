import {BookSession} from '@/features/mentorship';
import {mentorshipTopics} from '@/features/mentorship/data/topics';
import {site} from '@/config/site';
export const metadata={title:'Book a Mentorship Session | '+site.name,description:'Share your goals and availability to request a focused mentorship conversation.'};
export default async function Page({searchParams}:{searchParams:Promise<{topic?:string|string[]}>}){
  const {topic}=await searchParams;
  const initialTopic=typeof topic==='string'&&mentorshipTopics.some(item=>item.slug===topic)?topic:'';
  return <BookSession initialTopic={initialTopic}/>;
}
