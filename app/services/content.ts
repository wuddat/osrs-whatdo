import data from "@/data/activities.json";

interface IPage {
  slug: string;
  title: string;
  text: string;
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
