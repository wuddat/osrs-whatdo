'use client';

import { useState } from 'react';
import { TextField, Button, Box, Typography, CircularProgress, ToggleButton, ToggleButtonGroup, Grid } from '@mui/material';
import { fetchPlayerStats } from '@/services/osrsApi';
import { PlayerStats } from '@/types/osrs';
import SkillBadge from '@/components/SkillBadge';
import QuestSelector from '@/components/QuestSelector';

export default function Home() {
  const [username, setUsername] = useState('');
  const [playerData, setPlayerData] = useState<PlayerStats | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleFilterChange = (
    event: React.MouseEvent<HTMLElement>,
    newFilters: string[]
  ) => {
    setSelectedFilters(newFilters);
  };

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
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        p: 10
      }}
    >
      <Box>
      {/* Title */}
      <Typography
      gutterBottom
        sx={{
          textAlign: 'center',
          fontSize: '6em',
          border: 'solid'
        }}
      >
        OSRS What-Do
      </Typography>
      <Typography
        gutterBottom
        sx={{
          textAlign: 'center',
        }}
      >
        Lost? Confused? Unsure what to do next? Type your username below, pick your vibe, and let us help you set your next OSRS goal!
      </Typography>

     {/* Filter Buttons */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle1" gutterBottom>
          Filter by activity type:
        </Typography>
        <ToggleButtonGroup
          value={selectedFilters}
          onChange={handleFilterChange}
          aria-label="activity filters"
        >
          <ToggleButton value="pvm" aria-label="pvm">
            PvM
          </ToggleButton>
          <ToggleButton value="skilling" aria-label="skilling">
            Skilling
          </ToggleButton>
          <ToggleButton value="quests" aria-label="quests">
            Quests
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

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

          {/* Display selected filters */}
          {selectedFilters.length > 0 && (
            <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary' }}>
              Selected filters: {selectedFilters.join(', ')}
            </Typography>
          )}

          {/* Skills Display */}
          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" gutterBottom>
              Skills
            </Typography>

            <Grid container spacing={2} alignItems={'center'}>
            {Object.entries(playerData.skills)
            .filter(([skill]) => skill !== 'overall')
            .map(([skill, data]) => (
              <Grid key={skill} size={{xs:6, sm: 4, md: 2, lg: 1}} sx={{minWidth: 'fit-content'}}> 
              <SkillBadge  skill={skill} level={data.level}/>
               <Typography sx={{whiteSpace: 'nowrap'}}>
                {data.experience.toLocaleString()} xp
              </Typography>
              </Grid>
            ))}
            </Grid>
          </Box>
          <QuestSelector username={playerData.username} />
        </Box>
      )}
      </Box>
    </Box>
  );
}