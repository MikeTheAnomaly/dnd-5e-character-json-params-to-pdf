const exampleClericData = {
  classLevel: "Cleric 1",
  background: "Acolyte",
  playerName: "Your Name",
  characterName: "Brother Theron",
  alignment: "Lawful Good",
  xp: "0",
  inspiration: "",
  profBonus: "+2",

  // Core Stats
  str: "14",
  dex: "10",
  con: "15",
  int: "12",
  wis: "16",
  cha: "13",
  strMod: "+2",
  dexMod: "+0",
  conMod: "+2",
  intMod: "+1",
  wisMod: "+3",
  chaMod: "+1",

  // Combat Stats
  ac: "16",
  initiative: "+0",
  speed: "30",
  hpMax: "10",
  hpCurrent: "10",
  hpTemp: "",
  hdTotal: "1d8",
  hd: "1d8",

  // Death Saves
  deathSaveSuccess1: false,
  deathSaveSuccess2: false,
  deathSaveSuccess3: false,
  deathSaveFailure1: false,
  deathSaveFailure2: false,
  deathSaveFailure3: false,

  // Saving Throws
  stStrength: "+2",
  stDexterity: "+0",
  stConstitution: "+4",
  stIntelligence: "+1",
  stWisdom: "+5",
  stCharisma: "+3",
  stStrengthProf: false,
  stDexterityProf: false,
  stConstitutionProf: true,
  stIntelligenceProf: false,
  stWisdomProf: true,
  stCharismaProf: true,

  // Skills
  acrobatics: "0",
  animalHandling: "+3",
  arcana: "+1",
  athletics: "+2",
  deception: "+1",
  history: "+1",
  insight: "+5",
  intimidation: "+1",
  investigation: "+1",
  medicine: "+5",
  nature: "+1",
  perception: "+3",
  performance: "+1",
  persuasion: "+1",
  religion: "+3",
  sleightOfHand: "+0",
  stealth: "+0",
  survival: "+3",

  // Skill Proficiencies
  acrobaticsProf: false,
  animalHandlingProf: false,
  arcanaProf: false,
  athleticsProf: false,
  deceptionProf: false,
  historyProf: false,
  insightProf: true,
  intimidationProf: false,
  investigationProf: false,
  medicineProf: true,
  natureProf: false,
  perceptionProf: false,
  performanceProf: false,
  persuasionProf: false,
  religionProf: true,
  sleightOfHandProf: false,
  stealthProf: false,
  survivalProf: false,

  // Weapons
  wpnName1: "Mace",
  wpnAtkBonus1: "+4",
  wpnDamage1: "1d6+2 Bludgeoning",
  wpnName2: "Light Crossbow",
  wpnAtkBonus2: "+2",
  wpnDamage2: "1d8 Piercing",
  wpnName3: "",
  wpnAtkBonus3: "",
  wpnDamage3: "",

  // Character Traits
  ideals: "Tradition. The ancient traditions of worship and sacrifice must be preserved and upheld. (Lawful)",
  bonds: "I will do anything to protect the temple where I served.",
  flaws: "I judge others harshly, and myself even more severely.",

  // Equipment and Currency
  cp: "0",
  sp: "0",
  ep: "0",
  gp: "15",
  pp: "0",
  equipment: "Mace\nChain mail\nShield\nLight crossbow",

  // Other
  passiveWisdom: "13",
  proficienciesLang: "Armor: All armor, shields\nWeapons: Simple weapons\nTools: None\n\nLanguages: Common, Celestial, Dwarvish\n\nProficiencies: Insight, Religion, Medicine",
  attacksSpellcasting: "Mace: +4 to hit, 1d6+2 bludgeoning damage.\nLight Crossbow: +2 to hit, 1d8 piercing damage.\nSpells: Spell Save DC 13, +5 to hit with spell attacks.",
  featuresTraits: "Spellcasting (Cleric)\nDivine Domain (Life Domain)\nBonus Proficiency (Heavy Armor)\nDisciple of Life\nShelter of the Faithful (Acolyte Feature)",

  // Page 2
  characterName2: "Brother Theron",
  age: "30",
  height: "6'0\"",
  weight: "180 lbs",
  eyes: "Brown",
  skin: "Fair",
  hair: "Black",
  factionSymbolImage: "",
  allies: "The Church of Torm\nFellow Acolytes",
  factionName: "Church of Torm",
  backstory: "Theron grew up in the temple, dedicated to the service of Torm, the god of courage and self-sacrifice. He strives to embody his deity's tenets and protect the weak.",
  featTraits2: "Additional Feats & Traits can go here.",
  treasure: "Any found treasure listed here.",
  characterImage: "",

  // Page 3 (Spells)
  spellcastingClass: "Cleric",
  spellcastingAbility: "Wisdom",
  spellSaveDC: "13",
  spellAtkBonus: "+5",
  spellCantrip1: "Guidance",
  spellCantrip2: "Sacred Flame",
  spellCantrip3: "Light",
  spellCantrip4: "",
  spellCantrip5: "",
  spellCantrip6: "",
  spellCantrip7: "",
  spellCantrip8: "",
  spellLevel1_1: "Bless (Domain)",
  spellLevel1_2: "Cure Wounds (Domain)",
  spellLevel1_3: "Healing Word",
  spellLevel1_4: "Shield of Faith",
  spellLevel1_5: "Guiding Bolt",
  spellLevel1_6: "Sanctuary",
  spellLevel1_7: "",
  spellLevel1_8: "",
  spellLevel1_9: "",
  spellLevel1_10: "",
  spellLevel1_11: "",
  // Note: Original data only had level 1 spells. Higher level spell slots are added as empty strings per the mapping.
  spellLevel2_1: "",
  spellLevel2_2: "",
  spellLevel2_3: "",
  spellLevel2_4: "",
  spellLevel2_5: "",
  spellLevel2_6: "",
  spellLevel2_7: "",
  spellLevel2_8: "",
  spellLevel2_9: "",
  spellLevel2_10: "",
  spellLevel2_11: "",
  spellLevel2_12: "",
  spellLevel2_13: "",
  spellLevel3_1: "",
  spellLevel3_2: "",
  spellLevel3_3: "",
  spellLevel3_4: "",
  spellLevel3_5: "",
  spellLevel3_6: "",
  spellLevel3_7: "",
  spellLevel3_8: "",
  spellLevel3_9: "",
  spellLevel3_10: "",
  spellLevel3_11: "",
  spellLevel3_12: "",
  spellLevel3_13: "",
  spellLevel4_1: "",
  spellLevel4_2: "",
  spellLevel4_3: "",
  spellLevel4_4: "",
  spellLevel4_5: "",
  spellLevel4_6: "",
  spellLevel4_7: "",
  spellLevel4_8: "",
  spellLevel4_9: "",
  spellLevel4_10: "",
  spellLevel4_11: "",
  spellLevel4_12: "",
  // Skipping levels 5 and 6 as they were not in the provided mapping list
  spellLevel7_1: "",
  spellLevel7_2: "",
  spellLevel7_3: "",
  spellLevel7_4: "",
  spellLevel7_5: "",
  spellLevel7_6: "",
  spellLevel7_7: "",
  spellLevel7_8: "",
  // Note: Keys like 'race', 'personalityTraits', 'slotsTotal1', 'slotsRemaining1', and spell prepared flags from the original object were omitted as they were not in the provided mapping.
};
