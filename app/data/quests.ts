export interface Quest {
  id: string;
  name: string;
  category: 'novice' | 'intermediate' | 'experienced' | 'master' | 'grandmaster';
  questPoints: number;
}

export const IMPORTANT_QUESTS: Quest[] = [
  // Grandmaster
  { id: 'dragon_slayer_ii', name: 'Dragon Slayer II', category: 'grandmaster', questPoints: 5 },
  { id: 'song_of_the_elves', name: 'Song of the Elves', category: 'grandmaster', questPoints: 4 },
  { id: 'sins_of_the_father', name: 'Sins of the Father', category: 'grandmaster', questPoints: 2 },
  { id: 'a_kingdom_divided', name: 'A Kingdom Divided', category: 'grandmaster', questPoints: 2 },
  
  // Master
  { id: 'monkey_madness_ii', name: 'Monkey Madness II', category: 'master', questPoints: 4 },
  { id: 'recipe_for_disaster', name: 'Recipe for Disaster', category: 'master', questPoints: 10 },
  { id: 'dream_mentor', name: 'Dream Mentor', category: 'master', questPoints: 2 },
  { id: 'lunar_diplomacy', name: 'Lunar Diplomacy', category: 'master', questPoints: 2 },
  { id: 'desert_treasure', name: 'Desert Treasure', category: 'master', questPoints: 3 },
  
  // Experienced
  { id: 'legends_quest', name: "Legends' Quest", category: 'experienced', questPoints: 4 },
  { id: 'heroes_quest', name: "Heroes' Quest", category: 'experienced', questPoints: 1 },
  { id: 'underground_pass', name: 'Underground Pass', category: 'experienced', questPoints: 5 },
  { id: 'regicide', name: 'Regicide', category: 'experienced', questPoints: 3 },
  { id: 'animal_magnetism', name: 'Animal Magnetism', category: 'experienced', questPoints: 1 },
  { id: 'fairy_tale_ii', name: 'Fairytale II - Cure a Queen', category: 'experienced', questPoints: 2 },
  
  // Intermediate
  { id: 'dragon_slayer', name: 'Dragon Slayer I', category: 'intermediate', questPoints: 2 },
  { id: 'lost_city', name: 'Lost City', category: 'intermediate', questPoints: 3 },
  { id: 'monkey_madness', name: 'Monkey Madness I', category: 'intermediate', questPoints: 3 },
  { id: 'horror_from_the_deep', name: 'Horror from the Deep', category: 'intermediate', questPoints: 2 },
  { id: 'tree_gnome_village', name: 'Tree Gnome Village', category: 'intermediate', questPoints: 2 },
  
  // Novice
  { id: 'waterfall_quest', name: 'Waterfall Quest', category: 'novice', questPoints: 1 },
  { id: 'witchs_house', name: "Witch's House", category: 'novice', questPoints: 4 },
  { id: 'priest_in_peril', name: 'Priest in Peril', category: 'novice', questPoints: 1 },
];