'use client';

import { useState } from 'react';
import { TextField, Button, Box, Typography, CircularProgress } from '@mui/material';
import { fetchPlayerStats } from '@/services/osrsApi';
import { PlayerStats } from '@/types/osrs';

export default function Home() {
  const [username, setUsername] = useState('');
  const [playerData, setPlayerData] = useState<PlayerStats | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!username.trim()) return;
   
    setLoading(true);
    setError('');
    setPlayerData(null);

    try {
      const data = await fetchPlayerStats(username);
      setPlayerData(data);
    } catch (err) {
      setError('Player not found or profile is private');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      className="panel"
      sx={{
        p: 'var(--osrs-xl)',
        maxWidth: 800,
        mx: 'auto',
        mt: 'var(--osrs-2xl)',
      }}
    >
      {/* Title */}
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          fontFamily: 'RuneScape Bold',
          textTransform: 'uppercase',
          color: 'var(--osrs-text-light)',
          textAlign: 'center',
        }}
      >
        WhatShouldIDo - OSRS
      </Typography>
     
       <Box
        sx={{
          display: 'flex',
          gap: 'var(--osrs-md)',
          mb: 'var(--osrs-lg)',
        }}
      >
        <TextField
          fullWidth
          label="Enter OSRS Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
        <Button variant="contained" onClick={handleSearch} disabled={loading}>
          Search
        </Button>
      </Box>

      {loading && <CircularProgress />}
     
      {error && (
        <Typography
          className="text-negative"
          sx={{
            mt: 'var(--osrs-md)',
            fontFamily: 'RuneScape Small',
            textAlign: 'center',
          }}
        >
          {error}
          </Typography>
      )}

      {playerData && (
        <Box>
          <Typography variant="h5">
            {playerData.username} - Combat Level {playerData.combatLevel}
          </Typography>
          <Typography>
            Total Level: {playerData.skills.overall.level}
          </Typography>
          <Typography>
            Total XP: {playerData.skills.overall.experience.toLocaleString()}
          </Typography>

          {/* Quest Data Display */}
          {playerData.quests && (
            <Box sx={{ mt: 3, p: 2, bgcolor: '#f5f5f5', borderRadius: 2 }}>
              <Typography variant="h6" gutterBottom>
                Quest Progress
              </Typography>
              <Typography>
                Quest Points: {playerData.quests.questPoints} / 293
              </Typography>
              <Typography variant="caption" color="text.secondary">
                ({Math.round((playerData.quests.questPoints / 293) * 100)}% complete)
              </Typography>
            </Box>
          )}

          {/* Skills Display */}
          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" gutterBottom>
              Skills
            </Typography>
            {Object.entries(playerData.skills).map(([skill, data]) => (
              <Typography key={skill}>
                {skill.charAt(0).toUpperCase() + skill.slice(1)}: {data.level} (XP: {data.experience.toLocaleString()})
              </Typography>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
}