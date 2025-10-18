export interface Quest {
  id: string;
  name: string;
  category: 'novice' | 'intermediate' | 'experienced' | 'master' | 'grandmaster';
  questPoints: number;
  members: boolean;
}

export const ALL_QUESTS: Quest[] = [
  // FREE TO PLAY QUESTS
  // Novice F2P
  { id: 'cooks_assistant', name: "Cook's Assistant", category: 'novice', questPoints: 1, members: false },
  { id: 'demon_slayer', name: 'Demon Slayer', category: 'novice', questPoints: 3, members: false },
  { id: 'the_restless_ghost', name: 'The Restless Ghost', category: 'novice', questPoints: 1, members: false },
  { id: 'romeo_and_juliet', name: 'Romeo & Juliet', category: 'novice', questPoints: 5, members: false },
  { id: 'sheep_shearer', name: 'Sheep Shearer', category: 'novice', questPoints: 1, members: false },
  { id: 'shield_of_arrav', name: 'Shield of Arrav', category: 'novice', questPoints: 1, members: false },
  { id: 'ernest_the_chicken', name: 'Ernest the Chicken', category: 'novice', questPoints: 4, members: false },
  { id: 'vampyre_slayer', name: 'Vampyre Slayer', category: 'novice', questPoints: 3, members: false },
  { id: 'imp_catcher', name: 'Imp Catcher', category: 'novice', questPoints: 1, members: false },
  { id: 'prince_ali_rescue', name: 'Prince Ali Rescue', category: 'novice', questPoints: 3, members: false },
  { id: 'dorics_quest', name: "Doric's Quest", category: 'novice', questPoints: 1, members: false },
  { id: 'black_knights_fortress', name: "Black Knights' Fortress", category: 'novice', questPoints: 3, members: false },
  { id: 'witchs_potion', name: "Witch's Potion", category: 'novice', questPoints: 1, members: false },
  { id: 'the_knights_sword', name: "The Knight's Sword", category: 'novice', questPoints: 1, members: false },
  { id: 'goblin_diplomacy', name: 'Goblin Diplomacy', category: 'novice', questPoints: 5, members: false },
  { id: 'pirates_treasure', name: "Pirate's Treasure", category: 'novice', questPoints: 2, members: false },
  { id: 'rune_mysteries', name: 'Rune Mysteries', category: 'novice', questPoints: 1, members: false },
  { id: 'misthalin_mystery', name: 'Misthalin Mystery', category: 'novice', questPoints: 1, members: false },
  { id: 'the_corsair_curse', name: 'The Corsair Curse', category: 'novice', questPoints: 2, members: false },
  { id: 'x_marks_the_spot', name: 'X Marks the Spot', category: 'novice', questPoints: 1, members: false },
  { id: 'below_ice_mountain', name: 'Below Ice Mountain', category: 'novice', questPoints: 1, members: false },
  
  // Intermediate F2P
  { id: 'dragon_slayer_i', name: 'Dragon Slayer I', category: 'intermediate', questPoints: 2, members: false },

  // MEMBERS QUESTS
  // Novice Members
  { id: 'druidic_ritual', name: 'Druidic Ritual', category: 'novice', questPoints: 4, members: true },
  { id: 'witchs_house', name: "Witch's House", category: 'novice', questPoints: 4, members: true },
  { id: 'priest_in_peril', name: 'Priest in Peril', category: 'novice', questPoints: 1, members: true },
  { id: 'dwarf_cannon', name: 'Dwarf Cannon', category: 'novice', questPoints: 1, members: true },
  { id: 'murder_mystery', name: 'Murder Mystery', category: 'novice', questPoints: 3, members: true },
  { id: 'the_dig_site', name: 'The Dig Site', category: 'novice', questPoints: 2, members: true },
  { id: 'gertrudes_cat', name: "Gertrude's Cat", category: 'novice', questPoints: 1, members: true },
  { id: 'legends_quest', name: "Legends' Quest", category: 'novice', questPoints: 4, members: true },
  { id: 'rumble_in_the_jungle', name: 'Jungle Potion', category: 'novice', questPoints: 1, members: true },
  { id: 'shilo_village', name: 'Shilo Village', category: 'novice', questPoints: 2, members: true },
  { id: 'the_tourist_trap', name: 'The Tourist Trap', category: 'novice', questPoints: 2, members: true },
  { id: 'watchtower', name: 'Watchtower', category: 'novice', questPoints: 4, members: true },
  { id: 'biohazard', name: 'Biohazard', category: 'novice', questPoints: 3, members: true },
  { id: 'clock_tower', name: 'Clock Tower', category: 'novice', questPoints: 1, members: true },
  { id: 'plague_city', name: 'Plague City', category: 'novice', questPoints: 1, members: true },
  { id: 'sea_slug', name: 'Sea Slug', category: 'novice', questPoints: 1, members: true },
  { id: 'waterfall_quest', name: 'Waterfall Quest', category: 'novice', questPoints: 1, members: true },
  { id: 'elemental_workshop_i', name: 'Elemental Workshop I', category: 'novice', questPoints: 1, members: true },
  { id: 'hazeel_cult', name: 'Hazeel Cult', category: 'novice', questPoints: 1, members: true },
  { id: 'sheep_herder', name: 'Sheep Herder', category: 'novice', questPoints: 4, members: true },
  { id: 'tribal_totem', name: 'Tribal Totem', category: 'novice', questPoints: 1, members: true },
  { id: 'fishing_contest', name: 'Fishing Contest', category: 'novice', questPoints: 1, members: true },
  { id: 'monks_friend', name: "Monks Friend", category: 'novice', questPoints: 1, members: true },
  { id: 'temple_of_ikov', name: 'Temple of Ikov', category: 'novice', questPoints: 1, members: true },
  { id: 'scorpion_catcher', name: 'Scorpion Catcher', category: 'novice', questPoints: 1, members: true },
  { id: 'family_crest', name: 'Family Crest', category: 'novice', questPoints: 1, members: true },
  { id: 'merlins_crystal', name: "Merlin's Crystal", category: 'novice', questPoints: 6, members: true },
  { id: 'holy_grail', name: 'Holy Grail', category: 'novice', questPoints: 2, members: true },
  { id: 'fight_arena', name: 'Fight Arena', category: 'novice', questPoints: 2, members: true },
  { id: 'tree_gnome_village', name: 'Tree Gnome Village', category: 'novice', questPoints: 2, members: true },
  { id: 'the_grand_tree', name: 'The Grand Tree', category: 'novice', questPoints: 5, members: true },
  { id: 'big_chompy_bird_hunting', name: 'Big Chompy Bird Hunting', category: 'novice', questPoints: 2, members: true },
  { id: 'mountain_daughter', name: 'Mountain Daughter', category: 'novice', questPoints: 2, members: true },
  { id: 'death_plateau', name: 'Death Plateau', category: 'novice', questPoints: 1, members: true },
  { id: 'troll_stronghold', name: 'Troll Stronghold', category: 'novice', questPoints: 1, members: true },
  { id: 'wolf_whistle', name: 'Wolf Whistle', category: 'novice', questPoints: 1, members: true },
  { id: 'natural_history_quiz', name: 'Natural History Quiz', category: 'novice', questPoints: 2, members: true },
  { id: 'bear_your_soul', name: 'Bear Your Soul', category: 'novice', questPoints: 2, members: true },
  { id: 'alfred_grimhands_barcrawl', name: "Alfred Grimhand's Barcrawl", category: 'novice', questPoints: 1, members: true },
  { id: 'client_of_kourend', name: 'Client of Kourend', category: 'novice', questPoints: 1, members: true },

  // Intermediate Members
  { id: 'lost_city', name: 'Lost City', category: 'intermediate', questPoints: 3, members: true },
  { id: 'monkey_madness_i', name: 'Monkey Madness I', category: 'intermediate', questPoints: 3, members: true },
  { id: 'horror_from_the_deep', name: 'Horror from the Deep', category: 'intermediate', questPoints: 2, members: true },
  { id: 'throne_of_miscellania', name: 'Throne of Miscellania', category: 'intermediate', questPoints: 1, members: true },
  { id: 'animal_magnetism', name: 'Animal Magnetism', category: 'intermediate', questPoints: 1, members: true },
  { id: 'the_fremennik_trials', name: 'The Fremennik Trials', category: 'intermediate', questPoints: 3, members: true },
  { id: 'the_giant_dwarf', name: 'The Giant Dwarf', category: 'intermediate', questPoints: 2, members: true },
  { id: 'recruitment_drive', name: 'Recruitment Drive', category: 'intermediate', questPoints: 1, members: true },
  { id: 'mournings_end_part_i', name: "Mourning's End Part I", category: 'intermediate', questPoints: 2, members: true },
  { id: 'forgettable_tale', name: 'Forgettable Tale of a Drunken Dwarf', category: 'intermediate', questPoints: 2, members: true },
  { id: 'garden_of_tranquillity', name: 'Garden of Tranquillity', category: 'intermediate', questPoints: 2, members: true },
  { id: 'a_tail_of_two_cats', name: 'A Tail of Two Cats', category: 'intermediate', questPoints: 2, members: true },
  { id: 'wanted', name: 'Wanted!', category: 'intermediate', questPoints: 1, members: true },
  { id: 'darkness_of_hallowvale', name: 'Darkness of Hallowvale', category: 'intermediate', questPoints: 2, members: true },
  { id: 'the_slug_menace', name: 'The Slug Menace', category: 'intermediate', questPoints: 1, members: true },
  { id: 'elemental_workshop_ii', name: 'Elemental Workshop II', category: 'intermediate', questPoints: 1, members: true },
  { id: 'my_arms_big_adventure', name: "My Arm's Big Adventure", category: 'intermediate', questPoints: 1, members: true },
  { id: 'enlightened_journey', name: 'Enlightened Journey', category: 'intermediate', questPoints: 1, members: true },
  { id: 'eagles_peak', name: "Eagles' Peak", category: 'intermediate', questPoints: 2, members: true },
  { id: 'tower_of_life', name: 'Tower of Life', category: 'intermediate', questPoints: 2, members: true },
  { id: 'underground_pass', name: 'Underground Pass', category: 'intermediate', questPoints: 5, members: true },
  { id: 'observatory_quest', name: 'Observatory Quest', category: 'intermediate', questPoints: 2, members: true },
  { id: 'the_tourist_trap', name: 'The Tourist Trap', category: 'intermediate', questPoints: 2, members: true },
  { id: 'tears_of_guthix', name: 'Tears of Guthix', category: 'intermediate', questPoints: 1, members: true },
  { id: 'zogre_flesh_eaters', name: 'Zogre Flesh Eaters', category: 'intermediate', questPoints: 1, members: true },
  { id: 'the_lost_tribe', name: 'The Lost Tribe', category: 'intermediate', questPoints: 1, members: true },
  { id: 'death_to_the_dorgeshuun', name: 'Death to the Dorgeshuun', category: 'intermediate', questPoints: 1, members: true },
  { id: 'fairy_tale_i', name: 'Fairytale I - Growing Pains', category: 'intermediate', questPoints: 2, members: true },
  { id: 'tai_bwo_wannai_trio', name: 'Tai Bwo Wannai Trio', category: 'intermediate', questPoints: 2, members: true },
  { id: 'the_hand_in_the_sand', name: 'The Hand in the Sand', category: 'intermediate', questPoints: 1, members: true },
  { id: 'troll_romance', name: 'Troll Romance', category: 'intermediate', questPoints: 2, members: true },
  { id: 'in_search_of_the_myreque', name: 'In Search of the Myreque', category: 'intermediate', questPoints: 2, members: true },
  { id: 'creature_of_fenkenstrain', name: 'Creature of Fenkenstrain', category: 'intermediate', questPoints: 2, members: true },
  { id: 'roving_elves', name: 'Roving Elves', category: 'intermediate', questPoints: 1, members: true },
  { id: 'ghosts_ahoy', name: 'Ghosts Ahoy', category: 'intermediate', questPoints: 2, members: true },
  { id: 'one_small_favour', name: 'One Small Favour', category: 'intermediate', questPoints: 2, members: true },
  { id: 'mountain_daughter', name: 'Mountain Daughter', category: 'intermediate', questPoints: 2, members: true },
  { id: 'between_a_rock', name: 'Between a Rock...', category: 'intermediate', questPoints: 2, members: true },
  { id: 'the_feud', name: 'The Feud', category: 'intermediate', questPoints: 1, members: true },
  { id: 'the_golem', name: 'The Golem', category: 'intermediate', questPoints: 1, members: true },
  { id: 'desert_treasure_i', name: 'Desert Treasure I', category: 'intermediate', questPoints: 3, members: true },
  { id: 'icthlarins_little_helper', name: "Icthlarin's Little Helper", category: 'intermediate', questPoints: 2, members: true },
  { id: 'cold_war', name: 'Cold War', category: 'intermediate', questPoints: 1, members: true },
  { id: 'rum_deal', name: 'Rum Deal', category: 'intermediate', questPoints: 2, members: true },
  { id: 'shadow_of_the_storm', name: 'Shadow of the Storm', category: 'intermediate', questPoints: 1, members: true },
  { id: 'making_history', name: 'Making History', category: 'intermediate', questPoints: 3, members: true },
  { id: 'ratcatchers', name: 'Ratcatchers', category: 'intermediate', questPoints: 2, members: true },
  { id: 'spirits_of_the_elid', name: 'Spirits of the Elid', category: 'intermediate', questPoints: 2, members: true },
  { id: 'devious_minds', name: 'Devious Minds', category: 'intermediate', questPoints: 1, members: true },
  { id: 'the_great_brain_robbery', name: 'The Great Brain Robbery', category: 'intermediate', questPoints: 2, members: true },
  { id: 'what_lies_below', name: 'What Lies Below', category: 'intermediate', questPoints: 1, members: true },
  { id: 'architectural_alliance', name: 'Architectural Alliance', category: 'intermediate', questPoints: 1, members: true },
  { id: 'the_ascent_of_arceuus', name: 'The Ascent of Arceuus', category: 'intermediate', questPoints: 1, members: true },
  { id: 'the_forsaken_tower', name: 'The Forsaken Tower', category: 'intermediate', questPoints: 1, members: true },
  { id: 'tale_of_the_righteous', name: 'Tale of the Righteous', category: 'intermediate', questPoints: 1, members: true },

  // Experienced Members
  { id: 'legends_quest', name: "Legends' Quest", category: 'experienced', questPoints: 4, members: true },
  { id: 'heroes_quest', name: "Heroes' Quest", category: 'experienced', questPoints: 1, members: true },
  { id: 'regicide', name: 'Regicide', category: 'experienced', questPoints: 3, members: true },
  { id: 'fairy_tale_ii', name: 'Fairytale II - Cure a Queen', category: 'experienced', questPoints: 2, members: true },
  { id: 'lunar_diplomacy', name: 'Lunar Diplomacy', category: 'experienced', questPoints: 2, members: true },
  { id: 'the_fremennik_isles', name: 'The Fremennik Isles', category: 'experienced', questPoints: 1, members: true },
  { id: 'royal_trouble', name: 'Royal Trouble', category: 'experienced', questPoints: 1, members: true },
  { id: 'haunted_mine', name: 'Haunted Mine', category: 'experienced', questPoints: 2, members: true },
  { id: 'shades_of_mortton', name: 'Shades of Mort\'ton', category: 'experienced', questPoints: 3, members: true },
  { id: 'in_aid_of_the_myreque', name: 'In Aid of the Myreque', category: 'experienced', questPoints: 2, members: true },
  { id: 'cabin_fever', name: 'Cabin Fever', category: 'experienced', questPoints: 2, members: true },
  { id: 'mournings_end_part_ii', name: "Mourning's End Part II", category: 'experienced', questPoints: 2, members: true },
  { id: 'swan_song', name: 'Swan Song', category: 'experienced', questPoints: 2, members: true },
  { id: 'contact', name: 'Contact!', category: 'experienced', questPoints: 1, members: true },
  { id: 'kings_ransom', name: "King's Ransom", category: 'experienced', questPoints: 1, members: true },
  { id: 'the_eyes_of_glouphrie', name: 'The Eyes of Glouphrie', category: 'experienced', questPoints: 2, members: true },
  { id: 'grim_tales', name: 'Grim Tales', category: 'experienced', questPoints: 1, members: true },
  { id: 'a_soul_s_bane', name: "A Soul's Bane", category: 'experienced', questPoints: 1, members: true },
  { id: 'the_depths_of_despair', name: 'The Depths of Despair', category: 'experienced', questPoints: 1, members: true },
  { id: 'the_queen_of_thieves', name: 'The Queen of Thieves', category: 'experienced', questPoints: 1, members: true },
  { id: 'land_of_the_goblins', name: 'Land of the Goblins', category: 'experienced', questPoints: 1, members: true },
  { id: 'the_path_of_glouphrie', name: 'The Path of Glouphrie', category: 'experienced', questPoints: 1, members: true },

  // Master Members
  { id: 'recipe_for_disaster', name: 'Recipe for Disaster', category: 'master', questPoints: 10, members: true },
  { id: 'monkey_madness_ii', name: 'Monkey Madness II', category: 'master', questPoints: 4, members: true },
  { id: 'dream_mentor', name: 'Dream Mentor', category: 'master', questPoints: 2, members: true },
  { id: 'while_guthix_sleeps', name: 'While Guthix Sleeps', category: 'master', questPoints: 5, members: true },
  { id: 'the_fremennik_exiles', name: 'The Fremennik Exiles', category: 'master', questPoints: 2, members: true },
  { id: 'making_friends_with_my_arm', name: 'Making Friends with My Arm', category: 'master', questPoints: 2, members: true },
  { id: 'dragon_slayer_ii', name: 'Dragon Slayer II', category: 'master', questPoints: 5, members: true },

  // Grandmaster Members
  { id: 'song_of_the_elves', name: 'Song of the Elves', category: 'grandmaster', questPoints: 4, members: true },
  { id: 'sins_of_the_father', name: 'Sins of the Father', category: 'grandmaster', questPoints: 2, members: true },
  { id: 'a_kingdom_divided', name: 'A Kingdom Divided', category: 'grandmaster', questPoints: 2, members: true },
  { id: 'a_night_at_the_theatre', name: 'A Night at the Theatre', category: 'grandmaster', questPoints: 2, members: true },
  { id: 'beneath_cursed_sands', name: 'Beneath Cursed Sands', category: 'grandmaster', questPoints: 2, members: true },
  { id: 'desert_treasure_ii', name: 'Desert Treasure II - The Fallen Empire', category: 'grandmaster', questPoints: 5, members: true },
  { id: 'secrets_of_the_north', name: 'Secrets of the North', category: 'grandmaster', questPoints: 2, members: true },
  { id: 'twilights_promise', name: 'Twilight\'s Promise', category: 'grandmaster', questPoints: 2, members: true },
  { id: 'children_of_the_sun', name: 'Children of the Sun', category: 'grandmaster', questPoints: 2, members: true },
  { id: 'at_first_light', name: 'At First Light', category: 'grandmaster', questPoints: 2, members: true },
  { id: 'defender_of_varrock', name: 'Defender of Varrock', category: 'grandmaster', questPoints: 2, members: true },
  { id: 'perilous_moons', name: 'Perilous Moons', category: 'grandmaster', questPoints: 2, members: true },
  { id: 'the_path_of_glouphrie', name: 'The Path of Glouphrie', category: 'grandmaster', questPoints: 1, members: true },
];

// Helper function to get quests by category
export function getQuestsByCategory(category: Quest['category']): Quest[] {
  return ALL_QUESTS.filter(q => q.category === category);
}

// Helper function to get F2P quests
export function getF2PQuests(): Quest[] {
  return ALL_QUESTS.filter(q => !q.members);
}

// Helper function to get Members quests
export function getMembersQuests(): Quest[] {
  return ALL_QUESTS.filter(q => q.members);
}

// Calculate total quest points
export function getTotalQuestPoints(): number {
  return ALL_QUESTS.reduce((sum, quest) => sum + quest.questPoints, 0);
}