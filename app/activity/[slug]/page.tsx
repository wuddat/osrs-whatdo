// app/[slug]/page.tsx
import { bySlug, allSlugs } from "@/services/content";
import { Typography } from "@mui/material";
import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import {Stack,Grid, Card, CardMedia, Box} from "@mui/material";
import SkillBadge from "@/components/SkillBadge";

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
    <Grid container spacing={2} columnSpacing={2}>
      {/* Left Box */}
      <Grid size={6} mt={'10px'}>
        <Typography variant="h3" >{item!.title}</Typography>
        <Stack direction="row" spacing ={2} alignItems={'center'}>
          <Typography variant="h6">Requirements:</Typography>
          <Typography variant="h6"><ReactMarkdown>{item.requirements.quests}</ReactMarkdown></Typography>

          {item.requirements.skills.map((s, i) => {
            return (
              <SkillBadge key={s} skill={s} level={item.requirements.skillLevels[i]}/> 
            );
          })}
        </Stack>
        <ReactMarkdown>{item.text}</ReactMarkdown>
      </Grid>

      <Grid size={6} mt={'10px'}>
        <Stack direction="row" spacing={2} sx={{justifyContent: 'space-between'}}>
        
        
        <Box 
        component = "img"
        sx={{maxWidth: '40vw', borderRadius: "10px"}}
        src={`https://cdn.jsdelivr.net/gh/wuddat/osrs-whatdo/public/images/${item.slug}.png`}
        alt={item.title}
        />
      </Stack>
      </Grid>
    </Grid>
    </>
  );
}
