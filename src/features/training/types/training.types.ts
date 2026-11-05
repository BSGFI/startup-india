export type TrainingProgram = {
  slug: string;
  title: string;
  category: string;
  description: string;
  skills: string[];
  modules: {title: string; description: string}[];
  project: string;
};
export type TrainingFormat = 'live' | 'bootcamp';
