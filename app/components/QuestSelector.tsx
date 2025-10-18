'use client';

import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IMPORTANT_QUESTS, Quest } from '@/data/quests';
import { saveUserQuestData, getUserQuestData } from '@/utils/questStorage';

interface QuestSelectorProps {
  username: string;
}

export default function QuestSelector({ username }: QuestSelectorProps) {
  const [completedQuests, setCompletedQuests] = useState<string[]>([]);
  const [hasChanges, setHasChanges] = useState(false);

  // Load saved quest data when component mounts or username changes
  useEffect(() => {
    const savedData = getUserQuestData(username);
    if (savedData) {
      setCompletedQuests(savedData.completedQuests);
    } else {
      setCompletedQuests([]);
    }
    setHasChanges(false);
  }, [username]);

  const handleQuestToggle = (questId: string) => {
    setCompletedQuests((prev) => {
      const newCompleted = prev.includes(questId)
        ? prev.filter((id) => id !== questId)
        : [...prev, questId];
      setHasChanges(true);
      return newCompleted;
    });
  };

  const handleSave = () => {
    saveUserQuestData(username, completedQuests);
    setHasChanges(false);
  };

  const questsByCategory = {
    grandmaster: IMPORTANT_QUESTS.filter((q) => q.category === 'grandmaster'),
    master: IMPORTANT_QUESTS.filter((q) => q.category === 'master'),
    experienced: IMPORTANT_QUESTS.filter((q) => q.category === 'experienced'),
    intermediate: IMPORTANT_QUESTS.filter((q) => q.category === 'intermediate'),
    novice: IMPORTANT_QUESTS.filter((q) => q.category === 'novice'),
  };

  const totalQuestPoints = completedQuests.reduce((sum, questId) => {
    const quest = IMPORTANT_QUESTS.find((q) => q.id === questId);
    return sum + (quest?.questPoints || 0);
  }, 0);

  return (
    <Box sx={{ mt: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6">Quest Progress</Typography>
        <Typography variant="body2" sx={{ color: 'var(--osrs-gold)' }}>
          {completedQuests.length} / {IMPORTANT_QUESTS.length} quests ({totalQuestPoints} QP)
        </Typography>
      </Box>

      {Object.entries(questsByCategory).map(([category, quests]) => (
        <Accordion
          key={category}
          sx={{
            backgroundColor: 'var(--osrs-panel)',
            border: '2px solid var(--osrs-border)',
            mb: 1,
            '&:before': { display: 'none' },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: 'var(--osrs-gold)' }} />}
            sx={{
              '&:hover': {
                backgroundColor: 'var(--osrs-dark-brown)',
              },
            }}
          >
            <Typography sx={{ textTransform: 'capitalize', fontWeight: 600 }}>
              {category} ({quests.filter((q) => completedQuests.includes(q.id)).length}/{quests.length})
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              {quests.map((quest) => (
                <FormControlLabel
                  key={quest.id}
                  control={
                    <Checkbox
                      checked={completedQuests.includes(quest.id)}
                      onChange={() => handleQuestToggle(quest.id)}
                      sx={{
                        color: 'var(--osrs-border)',
                        '&.Mui-checked': {
                          color: 'var(--osrs-gold)',
                        },
                      }}
                    />
                  }
                  label={
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                      <span>{quest.name}</span>
                      <span style={{ color: 'var(--osrs-gold)', marginLeft: '8px' }}>
                        {quest.questPoints} QP
                      </span>
                    </Box>
                  }
                  sx={{ width: '100%' }}
                />
              ))}
            </FormGroup>
          </AccordionDetails>
        </Accordion>
      ))}

      {hasChanges && (
        <Button
          variant="contained"
          fullWidth
          onClick={handleSave}
          sx={{ mt: 2 }}
        >
          Save Quest Progress
        </Button>
      )}
    </Box>
  );
}