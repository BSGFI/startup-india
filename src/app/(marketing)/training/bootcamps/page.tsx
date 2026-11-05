import {TrainingPage} from '@/features/training';
import {site} from '@/config/site';
export const metadata={title:"Training Bootcamps"+' | '+site.name,description:'Explore practical training in development, data and design.'};
export default function Page(){return <TrainingPage format="bootcamp"/>}
