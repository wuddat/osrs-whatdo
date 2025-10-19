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
  { id: 'cooks-assistant', name: "Cook's Assistant", category: 'novice', questPoints: 1, members: false },
  { id: 'demon-slayer', name: 'Demon Slayer', category: 'novice', questPoints: 3, members: false },
  { id: 'the-restless-ghost', name: 'The Restless Ghost', category: 'novice', questPoints: 1, members: false },
  { id: 'romeo-and-juliet', name: 'Romeo & Juliet', category: 'novice', questPoints: 5, members: false },
  { id: 'sheep-shearer', name: 'Sheep Shearer', category: 'novice', questPoints: 1, members: false },
  { id: 'shield-of-arrav', name: 'Shield of Arrav', category: 'novice', questPoints: 1, members: false },
  { id: 'ernest-the-chicken', name: 'Ernest the Chicken', category: 'novice', questPoints: 4, members: false },
  { id: 'vampyre-slayer', name: 'Vampyre Slayer', category: 'novice', questPoints: 3, members: false },
  { id: 'imp-catcher', name: 'Imp Catcher', category: 'novice', questPoints: 1, members: false },
  { id: 'prince-ali-rescue', name: 'Prince Ali Rescue', category: 'novice', questPoints: 3, members: false },
  { id: 'dorics-quest', name: "Doric's Quest", category: 'novice', questPoints: 1, members: false },
  { id: 'black-knights-fortress', name: "Black Knights' Fortress", category: 'novice', questPoints: 3, members: false },
  { id: 'witchs-potion', name: "Witch's Potion", category: 'novice', questPoints: 1, members: false },
  { id: 'the-knights-sword', name: "The Knight's Sword", category: 'novice', questPoints: 1, members: false },
  { id: 'goblin-diplomacy', name: 'Goblin Diplomacy', category: 'novice', questPoints: 5, members: false },
  { id: 'pirates-treasure', name: "Pirate's Treasure", category: 'novice', questPoints: 2, members: false },
  { id: 'rune-mysteries', name: 'Rune Mysteries', category: 'novice', questPoints: 1, members: false },
  { id: 'misthalin-mystery', name: 'Misthalin Mystery', category: 'novice', questPoints: 1, members: false },
  { id: 'the-corsair-curse', name: 'The Corsair Curse', category: 'novice', questPoints: 2, members: false },
  { id: 'x-marks-the-spot', name: 'X Marks the Spot', category: 'novice', questPoints: 1, members: false },
  { id: 'below-ice-mountain', name: 'Below Ice Mountain', category: 'novice', questPoints: 1, members: false },
  
  // Intermediate F2P
  { id: 'dragon-slayer-i', name: 'Dragon Slayer I', category: 'intermediate', questPoints: 2, members: false },

  // MEMBERS QUESTS
  // Novice Members
  { id: 'druidic-ritual', name: 'Druidic Ritual', category: 'novice', questPoints: 4, members: true },
  { id: 'witchs-house', name: "Witch's House", category: 'novice', questPoints: 4, members: true },
  { id: 'priest-in-peril', name: 'Priest in Peril', category: 'novice', questPoints: 1, members: true },
  { id: 'dwarf-cannon', name: 'Dwarf Cannon', category: 'novice', questPoints: 1, members: true },
  { id: 'murder-mystery', name: 'Murder Mystery', category: 'novice', questPoints: 3, members: true },
  { id: 'the-dig-site', name: 'The Dig Site', category: 'novice', questPoints: 2, members: true },
  { id: 'gertrudes-cat', name: "Gertrude's Cat", category: 'novice', questPoints: 1, members: true },
  { id: 'legends-quest', name: "Legends' Quest", category: 'novice', questPoints: 4, members: true },
  { id: 'rumble-in-the-jungle', name: 'Jungle Potion', category: 'novice', questPoints: 1, members: true },
  { id: 'shilo-village', name: 'Shilo Village', category: 'novice', questPoints: 2, members: true },
  { id: 'the-tourist-trap', name: 'The Tourist Trap', category: 'novice', questPoints: 2, members: true },
  { id: 'watchtower', name: 'Watchtower', category: 'novice', questPoints: 4, members: true },
  { id: 'biohazard', name: 'Biohazard', category: 'novice', questPoints: 3, members: true },
  { id: 'clock-tower', name: 'Clock Tower', category: 'novice', questPoints: 1, members: true },
  { id: 'plague-city', name: 'Plague City', category: 'novice', questPoints: 1, members: true },
  { id: 'sea-slug', name: 'Sea Slug', category: 'novice', questPoints: 1, members: true },
  { id: 'waterfall-quest', name: 'Waterfall Quest', category: 'novice', questPoints: 1, members: true },
  { id: 'elemental-workshop-i', name: 'Elemental Workshop I', category: 'novice', questPoints: 1, members: true },
  { id: 'hazeel-cult', name: 'Hazeel Cult', category: 'novice', questPoints: 1, members: true },
  { id: 'sheep-herder', name: 'Sheep Herder', category: 'novice', questPoints: 4, members: true },
  { id: 'tribal-totem', name: 'Tribal Totem', category: 'novice', questPoints: 1, members: true },
  { id: 'fishing-contest', name: 'Fishing Contest', category: 'novice', questPoints: 1, members: true },
  { id: 'monks-friend', name: "Monks Friend", category: 'novice', questPoints: 1, members: true },
  { id: 'temple-of-ikov', name: 'Temple of Ikov', category: 'novice', questPoints: 1, members: true },
  { id: 'scorpion-catcher', name: 'Scorpion Catcher', category: 'novice', questPoints: 1, members: true },
  { id: 'family-crest', name: 'Family Crest', category: 'novice', questPoints: 1, members: true },
  { id: 'merlins-crystal', name: "Merlin's Crystal", category: 'novice', questPoints: 6, members: true },
  { id: 'holy-grail', name: 'Holy Grail', category: 'novice', questPoints: 2, members: true },
  { id: 'fight-arena', name: 'Fight Arena', category: 'novice', questPoints: 2, members: true },
  { id: 'tree-gnome-village', name: 'Tree Gnome Village', category: 'novice', questPoints: 2, members: true },
  { id: 'the-grand-tree', name: 'The Grand Tree', category: 'novice', questPoints: 5, members: true },
  { id: 'big-chompy-bird-hunting', name: 'Big Chompy Bird Hunting', category: 'novice', questPoints: 2, members: true },
  { id: 'mountain-daughter', name: 'Mountain Daughter', category: 'novice', questPoints: 2, members: true },
  { id: 'death-plateau', name: 'Death Plateau', category: 'novice', questPoints: 1, members: true },
  { id: 'troll-stronghold', name: 'Troll Stronghold', category: 'novice', questPoints: 1, members: true },
  { id: 'wolf-whistle', name: 'Wolf Whistle', category: 'novice', questPoints: 1, members: true },
  { id: 'natural-history-quiz', name: 'Natural History Quiz', category: 'novice', questPoints: 2, members: true },
  { id: 'bear-your-soul', name: 'Bear Your Soul', category: 'novice', questPoints: 2, members: true },
  { id: 'alfred-grimhands-barcrawl', name: "Alfred Grimhand's Barcrawl", category: 'novice', questPoints: 1, members: true },
  { id: 'client-of-kourend', name: 'Client of Kourend', category: 'novice', questPoints: 1, members: true },

  // Intermediate Members
  { id: 'lost-city', name: 'Lost City', category: 'intermediate', questPoints: 3, members: true },
  { id: 'monkey-madness-i', name: 'Monkey Madness I', category: 'intermediate', questPoints: 3, members: true },
  { id: 'horror-from-the-deep', name: 'Horror from the Deep', category: 'intermediate', questPoints: 2, members: true },
  { id: 'throne-of-miscellania', name: 'Throne of Miscellania', category: 'intermediate', questPoints: 1, members: true },
  { id: 'animal-magnetism', name: 'Animal Magnetism', category: 'intermediate', questPoints: 1, members: true },
  { id: 'the-fremennik-trials', name: 'The Fremennik Trials', category: 'intermediate', questPoints: 3, members: true },
  { id: 'the-giant-dwarf', name: 'The Giant Dwarf', category: 'intermediate', questPoints: 2, members: true },
  { id: 'recruitment-drive', name: 'Recruitment Drive', category: 'intermediate', questPoints: 1, members: true },
  { id: 'mournings-end-part-i', name: "Mourning's End Part I", category: 'intermediate', questPoints: 2, members: true },
  { id: 'forgettable-tale', name: 'Forgettable Tale of a Drunken Dwarf', category: 'intermediate', questPoints: 2, members: true },
  { id: 'garden-of-tranquillity', name: 'Garden of Tranquillity', category: 'intermediate', questPoints: 2, members: true },
  { id: 'a-tail-of-two-cats', name: 'A Tail of Two Cats', category: 'intermediate', questPoints: 2, members: true },
  { id: 'wanted', name: 'Wanted!', category: 'intermediate', questPoints: 1, members: true },
  { id: 'darkness-of-hallowvale', name: 'Darkness of Hallowvale', category: 'intermediate', questPoints: 2, members: true },
  { id: 'the-slug-menace', name: 'The Slug Menace', category: 'intermediate', questPoints: 1, members: true },
  { id: 'elemental-workshop-ii', name: 'Elemental Workshop II', category: 'intermediate', questPoints: 1, members: true },
  { id: 'my-arms-big-adventure', name: "My Arm's Big Adventure", category: 'intermediate', questPoints: 1, members: true },
  { id: 'enlightened-journey', name: 'Enlightened Journey', category: 'intermediate', questPoints: 1, members: true },
  { id: 'eagles-peak', name: "Eagles' Peak", category: 'intermediate', questPoints: 2, members: true },
  { id: 'tower-of-life', name: 'Tower of Life', category: 'intermediate', questPoints: 2, members: true },
  { id: 'underground-pass', name: 'Underground Pass', category: 'intermediate', questPoints: 5, members: true },
  { id: 'observatory-quest', name: 'Observatory Quest', category: 'intermediate', questPoints: 2, members: true },
  { id: 'the-tourist-trap', name: 'The Tourist Trap', category: 'intermediate', questPoints: 2, members: true },
  { id: 'tears-of-guthix', name: 'Tears of Guthix', category: 'intermediate', questPoints: 1, members: true },
  { id: 'zogre-flesh-eaters', name: 'Zogre Flesh Eaters', category: 'intermediate', questPoints: 1, members: true },
  { id: 'the-lost-tribe', name: 'The Lost Tribe', category: 'intermediate', questPoints: 1, members: true },
  { id: 'death-to-the-dorgeshuun', name: 'Death to the Dorgeshuun', category: 'intermediate', questPoints: 1, members: true },
  { id: 'fairy-tale-i', name: 'Fairytale I - Growing Pains', category: 'intermediate', questPoints: 2, members: true },
  { id: 'tai-bwo-wannai-trio', name: 'Tai Bwo Wannai Trio', category: 'intermediate', questPoints: 2, members: true },
  { id: 'the-hand-in-the-sand', name: 'The Hand in the Sand', category: 'intermediate', questPoints: 1, members: true },
  { id: 'troll-romance', name: 'Troll Romance', category: 'intermediate', questPoints: 2, members: true },
  { id: 'in-search-of-the-myreque', name: 'In Search of the Myreque', category: 'intermediate', questPoints: 2, members: true },
  { id: 'creature-of-fenkenstrain', name: 'Creature of Fenkenstrain', category: 'intermediate', questPoints: 2, members: true },
  { id: 'roving-elves', name: 'Roving Elves', category: 'intermediate', questPoints: 1, members: true },
  { id: 'ghosts-ahoy', name: 'Ghosts Ahoy', category: 'intermediate', questPoints: 2, members: true },
  { id: 'one-small-favour', name: 'One Small Favour', category: 'intermediate', questPoints: 2, members: true },
  { id: 'mountain-daughter', name: 'Mountain Daughter', category: 'intermediate', questPoints: 2, members: true },
  { id: 'between-a-rock', name: 'Between a Rock...', category: 'intermediate', questPoints: 2, members: true },
  { id: 'the-feud', name: 'The Feud', category: 'intermediate', questPoints: 1, members: true },
  { id: 'the-golem', name: 'The Golem', category: 'intermediate', questPoints: 1, members: true },
  { id: 'desert-treasure-i', name: 'Desert Treasure I', category: 'intermediate', questPoints: 3, members: true },
  { id: 'icthlarins-little-helper', name: "Icthlarin's Little Helper", category: 'intermediate', questPoints: 2, members: true },
  { id: 'cold-war', name: 'Cold War', category: 'intermediate', questPoints: 1, members: true },
  { id: 'rum-deal', name: 'Rum Deal', category: 'intermediate', questPoints: 2, members: true },
  { id: 'shadow-of-the-storm', name: 'Shadow of the Storm', category: 'intermediate', questPoints: 1, members: true },
  { id: 'making-history', name: 'Making History', category: 'intermediate', questPoints: 3, members: true },
  { id: 'ratcatchers', name: 'Ratcatchers', category: 'intermediate', questPoints: 2, members: true },
  { id: 'spirits-of-the-elid', name: 'Spirits of the Elid', category: 'intermediate', questPoints: 2, members: true },
  { id: 'devious-minds', name: 'Devious Minds', category: 'intermediate', questPoints: 1, members: true },
  { id: 'the-great-brain-robbery', name: 'The Great Brain Robbery', category: 'intermediate', questPoints: 2, members: true },
  { id: 'what-lies-below', name: 'What Lies Below', category: 'intermediate', questPoints: 1, members: true },
  { id: 'architectural-alliance', name: 'Architectural Alliance', category: 'intermediate', questPoints: 1, members: true },
  { id: 'the-ascent-of-arceuus', name: 'The Ascent of Arceuus', category: 'intermediate', questPoints: 1, members: true },
  { id: 'the-forsaken-tower', name: 'The Forsaken Tower', category: 'intermediate', questPoints: 1, members: true },
  { id: 'tale-of-the-righteous', name: 'Tale of the Righteous', category: 'intermediate', questPoints: 1, members: true },

  // Experienced Members
  { id: 'legends-quest', name: "Legends' Quest", category: 'experienced', questPoints: 4, members: true },
  { id: 'heroes-quest', name: "Heroes' Quest", category: 'experienced', questPoints: 1, members: true },
  { id: 'regicide', name: 'Regicide', category: 'experienced', questPoints: 3, members: true },
  { id: 'fairy-tale-ii', name: 'Fairytale II - Cure a Queen', category: 'experienced', questPoints: 2, members: true },
  { id: 'lunar-diplomacy', name: 'Lunar Diplomacy', category: 'experienced', questPoints: 2, members: true },
  { id: 'the-fremennik-isles', name: 'The Fremennik Isles', category: 'experienced', questPoints: 1, members: true },
  { id: 'royal-trouble', name: 'Royal Trouble', category: 'experienced', questPoints: 1, members: true },
  { id: 'haunted-mine', name: 'Haunted Mine', category: 'experienced', questPoints: 2, members: true },
  { id: 'shades-of-mortton', name: 'Shades of Mort\'ton', category: 'experienced', questPoints: 3, members: true },
  { id: 'in-aid-of-the-myreque', name: 'In Aid of the Myreque', category: 'experienced', questPoints: 2, members: true },
  { id: 'cabin-fever', name: 'Cabin Fever', category: 'experienced', questPoints: 2, members: true },
  { id: 'mournings-end-part-ii', name: "Mourning's End Part II", category: 'experienced', questPoints: 2, members: true },
  { id: 'swan-song', name: 'Swan Song', category: 'experienced', questPoints: 2, members: true },
  { id: 'contact', name: 'Contact!', category: 'experienced', questPoints: 1, members: true },
  { id: 'kings-ransom', name: "King's Ransom", category: 'experienced', questPoints: 1, members: true },
  { id: 'the-eyes-of-glouphrie', name: 'The Eyes of Glouphrie', category: 'experienced', questPoints: 2, members: true },
  { id: 'grim-tales', name: 'Grim Tales', category: 'experienced', questPoints: 1, members: true },
  { id: 'a-soul-s-bane', name: "A Soul's Bane", category: 'experienced', questPoints: 1, members: true },
  { id: 'the-depths-of-despair', name: 'The Depths of Despair', category: 'experienced', questPoints: 1, members: true },
  { id: 'the-queen-of-thieves', name: 'The Queen of Thieves', category: 'experienced', questPoints: 1, members: true },
  { id: 'land-of-the-goblins', name: 'Land of the Goblins', category: 'experienced', questPoints: 1, members: true },
  { id: 'the-path-of-glouphrie', name: 'The Path of Glouphrie', category: 'experienced', questPoints: 1, members: true },

  // Master Members
  { id: 'recipe-for-disaster', name: 'Recipe for Disaster', category: 'master', questPoints: 10, members: true },
  { id: 'monkey-madness-ii', name: 'Monkey Madness II', category: 'master', questPoints: 4, members: true },
  { id: 'dream-mentor', name: 'Dream Mentor', category: 'master', questPoints: 2, members: true },
  { id: 'while-guthix-sleeps', name: 'While Guthix Sleeps', category: 'master', questPoints: 5, members: true },
  { id: 'the-fremennik-exiles', name: 'The Fremennik Exiles', category: 'master', questPoints: 2, members: true },
  { id: 'making-friends-with-my-arm', name: 'Making Friends with My Arm', category: 'master', questPoints: 2, members: true },
  { id: 'dragon-slayer-ii', name: 'Dragon Slayer II', category: 'master', questPoints: 5, members: true },

  // Grandmaster Members
  { id: 'song-of-the-elves', name: 'Song of the Elves', category: 'grandmaster', questPoints: 4, members: true },
  { id: 'sins-of-the-father', name: 'Sins of the Father', category: 'grandmaster', questPoints: 2, members: true },
  { id: 'a-kingdom-divided', name: 'A Kingdom Divided', category: 'grandmaster', questPoints: 2, members: true },
  { id: 'a-night-at-the-theatre', name: 'A Night at the Theatre', category: 'grandmaster', questPoints: 2, members: true },
  { id: 'beneath-cursed-sands', name: 'Beneath Cursed Sands', category: 'grandmaster', questPoints: 2, members: true },
  { id: 'desert-treasure-ii', name: 'Desert Treasure II - The Fallen Empire', category: 'grandmaster', questPoints: 5, members: true },
  { id: 'secrets-of-the-north', name: 'Secrets of the North', category: 'grandmaster', questPoints: 2, members: true },
  { id: 'twilights-promise', name: 'Twilight\'s Promise', category: 'grandmaster', questPoints: 2, members: true },
  { id: 'children-of-the-sun', name: 'Children of the Sun', category: 'grandmaster', questPoints: 2, members: true },
  { id: 'at-first-light', name: 'At First Light', category: 'grandmaster', questPoints: 2, members: true },
  { id: 'defender-of-varrock', name: 'Defender of Varrock', category: 'grandmaster', questPoints: 2, members: true },
  { id: 'perilous-moons', name: 'Perilous Moons', category: 'grandmaster', questPoints: 2, members: true },
  { id: 'the-path-of-glouphrie', name: 'The Path of Glouphrie', category: 'grandmaster', questPoints: 1, members: true },
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