'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; 
import { TextField, Button, Box, Typography, CircularProgress, ToggleButton, ToggleButtonGroup, Grid } from '@mui/material';
import { fetchPlayerStats } from '@/services/osrsApi';
import { PlayerStats, UserQuestData } from '@/types/osrs';
import SkillBadge from '@/components/SkillBadge';
import QuestSelector from '@/components/QuestSelector';
import { saveUserQuestData, getUserQuestData } from '@/utils/questStorage';
import { activitySelector } from './utils/activitySelector';

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [playerData, setPlayerData] = useState<PlayerStats | null>(null);
  const [userQuestData, setUserQuestData] = useState<UserQuestData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [questsSaved, setQuestsSaved] = useState<Boolean>(false);

  const searchFilters: string[] = [
    "pvm","skilling","quests","co-op","gathering","moneymaking"
  ]

  const recommendActivity = async () => {
    console.log('Logged player data is: -----')
    console.log(userQuestData),
    console.log(playerData)

    if (playerData && userQuestData){
      const selectedActivity = activitySelector(playerData.skills, userQuestData.completedQuests,)
      console.log('The selected activity is: ', selectedActivity)

      if (selectedActivity){
        router.push(`/activity/${selectedActivity}`);
      } else {console.log('idk man somethin be fucky')}
    }
  }

  

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
    setUserQuestData(null);
    setPlayerData(null);

    try {
      const data = await fetchPlayerStats(username);
      setPlayerData(data);
      const questData = await getUserQuestData(username);
      setUserQuestData(questData);
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
          What do you want to focus on?:
        </Typography>
        <ToggleButtonGroup
          value={selectedFilters}
          onChange={handleFilterChange}
          aria-label="activity filters"
        >
                  {Object.entries(searchFilters).map(([f,v]) =>(
          <ToggleButton key={f} value={v} aria-label={v}>
            {v}
          </ToggleButton>
        ))}
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
          <QuestSelector 
            username={playerData.username} 
            onSaveComplete={() => setQuestsSaved(true)}
            />
          {questsSaved && (
            <Button
              variant="contained"
              fullWidth
              onClick={() => recommendActivity()}
              sx={{ mt: 2 , p:4}}
              >
              <Typography variant='h5'>Recommend Activity</Typography>
            </Button>
          )}
            
        </Box>
      )}
      </Box>
    </Box>
  );
}