import {TrainingPage} from '@/features/training';
import {site} from '@/config/site';
export const metadata={title:"Live Training"+' | '+site.name,description:'Explore practical training in development, data and design.'};
export default function Page(){return <TrainingPage format="live"/>}
