export interface Skill {
    image: string;
    title: string;
    rating: number;
    description: string;
  }

  export interface ExperienceOrQualification {
    year: string;
    name: string;
    company?: string;
    institution?: string;
    city: string;
  }