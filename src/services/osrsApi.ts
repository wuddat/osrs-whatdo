import { PlayerStats } from '@/types/osrs';

export async function fetchPlayerStats(username: string): Promise<PlayerStats> {
  const response = await fetch(`/api/player/${encodeURIComponent(username)}`);

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to fetch player data');
  }

  return response.json();
}