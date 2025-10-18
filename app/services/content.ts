import data from "@/data/activities.json";
import { PlayerStats } from "@/types/osrs";

interface IPage {
  slug: string;
  title: string;
  text: string;
  requirements: IRequirement;
}

interface IRequirement {
  quests: string;
  skills: string[];
  skillLevels: number[];
}
const pages: IPage[] = data;

export function allPages(): IPage[] {
  return pages;
}

export function allSlugs(): string[] {
  return pages.map((p) => p.slug);
}

export function bySlug(slug: string): IPage | undefined {
  return pages.find((p) => p.slug === slug);
}
