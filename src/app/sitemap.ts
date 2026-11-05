import {trainingPrograms} from '@/features/training/data/programs';
import type { MetadataRoute } from 'next';
import { internships } from '@/features/internships/data/internships';
import { site } from '@/config/site';
export default function sitemap(): MetadataRoute.Sitemap { return ['', '/about', '/services', '/internships', '/internships/how-it-works', '/internships/apply', ...internships.map(track => '/internships/' + track.slug), '/training', '/training/live', '/training/bootcamps', ...trainingPrograms.map(program => '/training/' + program.slug), '/mentorship', '/mentorship/book', '/contact'].map(path => ({ url: new URL(path || '/', site.url).href })); }
