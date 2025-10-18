// app/[slug]/page.tsx
import { bySlug, allSlugs } from "@/services/content";
import { Typography } from "@mui/material";
import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import {Stack,Box, Card, CardMedia} from "@mui/material";

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
<Stack direction="row" spacing={2} sx={{justifyContent: 'space-around', alignItems: 'center'}}>
      <Typography variant="h3" my={'10px'}>{item!.title}</Typography>
      <Stack direction="row" spacing ={2}>
          <Typography variant="h6">Requirements:</Typography>
          <Typography variant="h6"><ReactMarkdown>{item.requirements.quests}</ReactMarkdown></Typography>
          
          {item.requirements.skills.map((s, i) => {
            return (
              <Typography variant="h6" key={s}>
                {s} - {item.requirements.skillLevels[i]}
              </Typography>
            );
          })}
        </Stack>
        </Stack>
        <Stack direction="row" spacing={2} sx={{justifyContent: 'space-between'}}>
        <ReactMarkdown>{item.text}</ReactMarkdown>
        
        <Card sx={{maxWidth: 800}}>
          <CardMedia 
          component="img"
        image={`https://cdn.jsdelivr.net/gh/wuddat/osrs-whatdo/public/images/${item.slug}.png`}
        alt={item.title}
        />
        </Card>
      </Stack>
    </>
  );
}
