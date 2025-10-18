// app/[slug]/page.tsx
import { bySlug, allSlugs } from "@/services/content";
import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

export const revalidate = 60;

export function generateStaticParams() {
  return allSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(props: PageProps<"/activity/[slug]">) {
  const { slug } = await props.params;
  const item = bySlug(slug);
  if (!item) return { title: "Not found" };
  return {
    title: item.title,
    description: item.text.slice(0, 140),
  };
}

export default async function Page(props: PageProps<"/activity/[slug]">) {
  const { slug } = await props.params;
  const item = bySlug(slug);
  if (!item) notFound();

  return (
    <>
      <h1 className="text-4xl">{item!.title}</h1>
      <Image
        src={`/images/${item.slug}.png`}
        height={200}
        width={600}
        alt={item.title}
      />
      <ReactMarkdown>{item.text}</ReactMarkdown>
    </>
  );
}
