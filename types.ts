export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  category?: string;
}

export interface Skill {
  name: string;
  description: string;
  level: number; // 0 to 100
  color: string; // Hex color code
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}
