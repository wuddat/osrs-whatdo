import * as React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

interface SkillBadgeProps{
    skill: string;
    size?: number;
    level?: number;
}


export default function SkillBadge({ skill, level, size = 60 }: SkillBadgeProps) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: size,
        height: size,
        borderRadius: '8px',
        border: '2px solid var(--osrs-border)',
        backgroundColor: 'var(--osrs-panel)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        transition: 'all 0.2s',
        '&:hover': {
          border: '2px solid var(--osrs-gold)',
          transform: 'scale(1.05)',
        },
      }}
    >
      <Image
        src={`/images/skills/${skill.toLowerCase()}.png`}
        alt={skill}
        width={size * 0.7}
        height={size * 0.7}
        style={{ objectFit: 'contain' }}
      />
      
      {/* Level Badge */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 2,
          right: 2,
          minWidth: '20px',
          textAlign: 'center',
          color: 'var(--osrs-gold)'
        }}
      > {level?.toLocaleString()}
      </Box>
    </Box>
  );
}