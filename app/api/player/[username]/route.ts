import { NextRequest, NextResponse } from 'next/server';

const SKILLS_ORDER = [
  'overall', 'attack', 'defence', 'strength', 'hitpoints', 'ranged',
  'prayer', 'magic', 'cooking', 'woodcutting', 'fletching', 'fishing',
  'firemaking', 'crafting', 'smithing', 'mining', 'herblore', 'agility',
  'thieving', 'slayer', 'farming', 'runecraft', 'hunter', 'construction'
];

export async function GET(
  request: NextRequest,
  { params }: { params: { username: string } }
) {
  const username = params.username;

  try {
    // Fetch hiscores data
    const response = await fetch(
      `https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=${encodeURIComponent(username)}`
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Player not found or profile is private' },
        { status: 404 }
      );
    }

    const csvData = await response.text();
    const lines = csvData.trim().split('\n');
   
    const skills: any = {};
   
    SKILLS_ORDER.forEach((skillName, index) => {
      const [rank, level, experience] = lines[index].split(',').map(Number);
      skills[skillName] = { rank, level, experience };
    });

    const combatLevel = calculateCombatLevel(skills);

    return NextResponse.json({
      username,
      skills,
      combatLevel,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch player data' },
      { status: 500 }
    );
  }
}

function calculateCombatLevel(skills: any): number {
  const base = 0.25 * (skills.defence.level + skills.hitpoints.level + Math.floor(skills.prayer.level / 2));
  const melee = 0.325 * (skills.attack.level + skills.strength.level);
  const range = 0.325 * (Math.floor(skills.ranged.level * 1.5));
  const mage = 0.325 * (Math.floor(skills.magic.level * 1.5));
 
  return Math.floor(base + Math.max(melee, range, mage));
}