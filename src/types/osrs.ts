export interface PlayerSkill {
  rank: number;
  level: number;
  experience: number;
}

export interface QuestData {
  complete: number;
  notStarted: number;
  started: number;
  questPoints: number;
}

export interface PlayerStats {
  username: string;
  skills: {
    overall: PlayerSkill;
    attack: PlayerSkill;
    defence: PlayerSkill;
    strength: PlayerSkill;
    hitpoints: PlayerSkill;
    ranged: PlayerSkill;
    prayer: PlayerSkill;
    magic: PlayerSkill;
    cooking: PlayerSkill;
    woodcutting: PlayerSkill;
    fletching: PlayerSkill;
    fishing: PlayerSkill;
    firemaking: PlayerSkill;
    crafting: PlayerSkill;
    smithing: PlayerSkill;
    mining: PlayerSkill;
    herblore: PlayerSkill;
    agility: PlayerSkill;
    thieving: PlayerSkill;
    slayer: PlayerSkill;
    farming: PlayerSkill;
    runecraft: PlayerSkill;
    hunter: PlayerSkill;
    construction: PlayerSkill;
  };
  combatLevel: number;
  quests?: QuestData;
}

