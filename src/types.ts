import {
  IAPIResource,
  IDescription,
  IEffect,
  IFlavorText,
  IGenerationGameIndex,
  IMachineVersionDetail,
  IName,
  INamedAPIResource,
  IVerboseEffect,
  IVersionEncounterDetail,
  IVersionGameIndex,
} from './interfaces';

// Locations
export interface ILocation extends INamedPokeAPIResource {
  areas: INamedAPIResource[]; // LocationArea
  game_indices: IGenerationGameIndex[];
  names: IName[];
  region: INamedAPIResource | null; // Region
}

// Location Areas
export interface ILocationArea extends INamedPokeAPIResource {
  encounter_method_rates: IEncounterMethodRate[];
  game_index: number;
  location: INamedAPIResource; // Location
  names: IName[];
  pokemon_encounters: IPokemonEncounter[];
}

export interface IEncounterMethodRate {
  encounter_method: INamedAPIResource; // EncounterMethod
  version_details: IEncounterVersionDetails[];
}

export interface IEncounterVersionDetails {
  rate: number;
  version: INamedAPIResource; // Version
}

export interface IPokemonEncounter {
  pokemon: INamedAPIResource; // Pokemon
  version_details: IVersionEncounterDetail[];
}

// Pal Park Areas
export interface IPalParkArea extends INamedPokeAPIResource {
  names: IName[];
  pokemon_encounters: IPalParkEncounterSpecies[];
}

export interface IPalParkEncounterSpecies {
  base_score: number;
  pokemon_species: INamedAPIResource; // PokemonSpecies
  rate: number;
}

// Regions
export interface IRegion extends INamedPokeAPIResource {
  locations: INamedAPIResource[]; // Location
  main_generation: INamedAPIResource; // Generation
  names: IName[];
  pokedexes: INamedAPIResource[]; // Pokedex
  version_groups: INamedAPIResource[]; // VersionGroup
}

// Machines
export interface IMachine extends IPokeAPIResource {
  item: INamedAPIResource; // Item
  move: INamedAPIResource; // Move
  version_group: INamedAPIResource; // VersionGroup
}

// Moves
export interface IMove extends INamedPokeAPIResource {
  accuracy: number | null;
  contest_combos: IContestComboSets | null;
  contest_effect: IAPIResource; // ContestEffect
  contest_type: INamedAPIResource; // ContestType
  damage_class: INamedAPIResource; // MoveDamageClass
  effect_chance: number | null;
  effect_changes: IAbilityEffectChange[];
  effect_entries: IVerboseEffect[];
  flavor_text_entries: IMoveFlavorText[];
  generation: INamedAPIResource; // Generation
  machines: IMachineVersionDetail[];
  meta: IMoveMetaData | null;
  names: IName[];
  past_values: IPastMoveStatValues[];
  power: number | null;
  pp: number | null;
  priority: number;
  stat_changes: IMoveStatChange[];
  super_contest_effect: IAPIResource | null; // SuperContestEffect
  target: INamedAPIResource; // MoveTarget
  type: INamedAPIResource; // Type
}

export interface IContestComboSets {
  normal: IContestComboDetail;
  super: IContestComboDetail;
}

export interface IContestComboDetail {
  use_after: INamedAPIResource[] | null; // Move
  use_before: INamedAPIResource[] | null; // Move
}

export interface IMoveFlavorText {
  flavor_text: string;
  language: INamedAPIResource; // Language
  version_group: INamedAPIResource; // VersionGroup
}

export interface IMoveMetaData {
  ailment: INamedAPIResource; // MoveAilment
  ailment_chance: number;
  category: INamedAPIResource; // MoveCategory
  crit_rate: number;
  drain: number;
  flinch_chance: number;
  healing: number;
  max_hits: number | null;
  max_turns: number | null;
  min_hits: number | null;
  min_turns: number | null;
  stat_chance: number;
}

export interface IMoveStatChange {
  change: number;
  stat: INamedAPIResource; // Stat
}

export interface IPastMoveStatValues {
  accuracy: number | null;
  effect_chance: number | null;
  effect_entries: IVerboseEffect[];
  power: number;
  pp: number | null;
  type: INamedAPIResource | null; // Type
  version_group: INamedAPIResource; // VersionGroup
}

// Move Ailments
export interface IMoveAilment extends INamedPokeAPIResource {
  moves: INamedAPIResource[]; // Move
  names: IName[];
}

// Move Battle Styles
export interface IMoveBattleStyle extends INamedPokeAPIResource {
  names: IName[];
}

// Move Categories
export interface IMoveCategory extends INamedPokeAPIResource {
  descriptions: IDescription[];
  moves: INamedAPIResource[]; // Move
}

// Move Damage Classes
export interface IMoveDamageClass extends INamedPokeAPIResource {
  descriptions: IDescription[];
  moves: INamedAPIResource[];
  names: IName[];
}

// Move Learn Methods
export interface IMoveLearnMethod extends INamedPokeAPIResource {
  descriptions: IDescription[];
  names: IName[];
  version_groups: INamedAPIResource[]; // VersionGroup
}

// Move Targets
export interface IMoveTarget extends INamedPokeAPIResource {
  descriptions: IDescription[];
  moves: INamedAPIResource[]; // Move
  names: IName[];
}

// Abilities
export interface IAbility extends INamedPokeAPIResource {
  effect_changes: IAbilityEffectChange[];
  effect_entries: IVerboseEffect[];
  flavor_text_entries: IAbilityFlavorText[];
  generation: INamedAPIResource; // Generation
  is_main_series: boolean;
  names: IName[];
  pokemon: IAbilityPokemon[];
}

export interface IAbilityEffectChange {
  effect_entries: IEffect[];
  version_group: INamedAPIResource; // VersionGroup
}

export interface IAbilityFlavorText {
  flavor_text: string;
  language: INamedAPIResource; // Language
  version_group: INamedAPIResource; // VersionGroup
}

export interface IAbilityPokemon {
  is_hidden: boolean;
  pokemon: INamedAPIResource; // Pokemon
  slot: number;
}

// Characteristics
export interface ICharacteristic extends IPokeAPIResource {
  gene_modulo: number;
  possible_values: number[];
}

// Egg Groups
export interface IEggGroup extends INamedPokeAPIResource {
  names: IName[];
  pokemon_species: INamedAPIResource[]; // PokemonSpecies
}

// Genders
export interface IGender extends INamedPokeAPIResource {
  pokemon_species_details: IPokemonSpeciesGender[];
  required_for_evolution: INamedAPIResource[]; // PokemonSpecies
}

export interface IPokemonSpeciesGender {
  pokemon_species: INamedAPIResource; // PokemonSpecies
  rate: number;
}

// Growth Rates
export interface IGrowthRate extends INamedPokeAPIResource {
  descriptions: IDescription[];
  formula: string;
  levels: IGrowthRateExperienceLevel[];
  pokemon_species: INamedAPIResource[]; // PokemonSpecies
}

export interface IGrowthRateExperienceLevel {
  experience: number;
  level: number;
}

// Natures
export interface INature extends INamedPokeAPIResource {
  decreased_stat: INamedAPIResource | null; // Stat
  hates_flavor: INamedAPIResource | null; // BerryFlavor
  increased_stat: INamedAPIResource | null; // Stat
  likes_flavor: INamedAPIResource | null; // BerryFlavor
  move_battle_style_preferences: IMoveBattleStylePreference[];
  names: IName[];
  pokeathlon_stat_changes: INatureStatChange[];
}

export interface INatureStatChange {
  max_change: number;
  pokeathlon_stat: INamedAPIResource; // PokeathlonStat
}

export interface IMoveBattleStylePreference {
  high_hp_preference: number;
  low_hp_preference: number;
  move_battle_style: INamedAPIResource; // MoveBattleStyle
}

// Pokeathlon Stats
export interface IPokeathlonStat extends INamedPokeAPIResource {
  affecting_natures: INaturePokeathlonStatAffectSets;
  names: IName[];
}

export interface INaturePokeathlonStatAffectSets {
  decrease: INaturePokeathlonStatAffect[];
  increase: INaturePokeathlonStatAffect[];
}

export interface INaturePokeathlonStatAffect {
  max_change: number;
  nature: INamedAPIResource; // Nature
}

// Pokemon
export interface IPokemon extends INamedPokeAPIResource {
  abilities: IPokemonAbility[];
  base_experience: number;
  forms: INamedAPIResource[]; // PokemonForm
  game_indices: IVersionGameIndex[];
  height: number;
  held_items: IPokemonHeldItem[];
  is_default: boolean;
  location_area_encounters: string;
  moves: IPokemonMove[];
  order: number;
  species: INamedAPIResource; // PokemonSpecies
  sprites: IPokemonSprites;
  stats: IPokemonStat[];
  types: IPokemonType[];
  weight: number;
}

export interface IPokemonAbility {
  ability: INamedAPIResource; // Ability
  is_hidden: boolean;
  slot: number;
}

export interface IPokemonType {
  slot: number;
  type: INamedAPIResource; // Type
}

export interface IPokemonHeldItem {
  item: INamedAPIResource; // Item
  version_details: IPokemonHeldItemVersion[];
}

export interface IPokemonHeldItemVersion {
  rarity: number;
  version: INamedAPIResource; // Version
}

export interface IPokemonMove {
  move: INamedAPIResource; // Move
  version_group_details: IPokemonMoveVersion[];
}

export interface IPokemonMoveVersion {
  level_learned_at: number;
  move_learn_method: INamedAPIResource; // MoveLearnMethod
  version_group: INamedAPIResource; // VersionGroup
}

export interface IPokemonStat {
  base_stat: number;
  effort: number;
  stat: INamedAPIResource; // Stat
}

export interface IPokemonSprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

export interface ILocationAreaEncounter {
  location_area: INamedAPIResource; // LocationArea
  version_details: IVersionEncounterDetail[];
}

// Pokemon Colors
export interface IPokemonColor extends INamedPokeAPIResource {
  names: IName[];
  pokemon_species: INamedAPIResource[];
}

// Pokemon Forms
export interface IPokemonForm extends INamedPokeAPIResource {
  form_name: string;
  form_names: IName[];
  form_order: number;
  is_battle_only: boolean;
  is_default: boolean;
  is_mega: boolean;
  names: IName[];
  order: number;
  pokemon: INamedAPIResource; // Pokemon
  sprites: IPokemonFormSprites;
  version_group: INamedAPIResource; // VersionGroup
}

export interface IPokemonFormSprites {
  back_default: string | null;
  back_shiny: string | null;
  front_default: string | null;
  front_shiny: string | null;
}

// Pokemon Habitats
export interface IPokemonHabitat extends INamedPokeAPIResource {
  names: IName[];
  pokemon_species: INamedAPIResource[]; // PokemonSpecies
}

// Pokemon Shapes
export interface IPokemonShape extends INamedPokeAPIResource {
  awesome_names: IAwesomeName[];
  names: IName[];
  pokemon_species: IPokemonSpecies[];
}

export interface IAwesomeName {
  awesome_name: string;
  language: INamedAPIResource; // Language
}

// Pokemon Species
export interface IPokemonSpecies extends INamedPokeAPIResource {
  base_happiness: number;
  capture_rate: number;
  color: INamedAPIResource; // PokemonColor
  egg_groups: INamedAPIResource[]; // EggGroup
  evolution_chain: IAPIResource; // EvolutionChain
  evolves_from_species: INamedAPIResource | null; // PokemonSpecies
  flavor_text_entries: IFlavorText[];
  form_descriptions: IDescription[];
  forms_switchable: boolean;
  gender_rate: number;
  genera: IGenus[];
  generation: INamedAPIResource; // Generation
  growth_rate: INamedAPIResource; // GrowthRate
  habitat: INamedAPIResource | null; // Habitat
  has_gender_differences: boolean;
  hatch_counter: number;
  is_baby: boolean;
  names: IName[];
  order: number;
  pal_park_encounters: IPalParkEncounterArea[];
  pokedex_numbers: IPokemonSpeciesDexEntry[];
  shape: INamedAPIResource; // PokemonShape
  varieties: IPokemonSpeciesVariety[];
}

export interface IGenus {
  genus: string;
  language: INamedAPIResource; // Language
}

export interface IPokemonSpeciesDexEntry {
  entry_number: number;
  pokedex: INamedAPIResource; // Pokedex
}

export interface IPalParkEncounterArea {
  area: INamedAPIResource; // PalParkArea
  base_score: number;
  rate: number;
}

export interface IPokemonSpeciesVariety {
  is_default: boolean;
  pokemon: INamedAPIResource; // Pokemon
}

// Stats
export interface IStat extends INamedPokeAPIResource {
  affecting_moves: IMoveStatAffectSets;
  affecting_natures: INatureStatAffectSets;
  characteristics: IAPIResource; // Characteristic
  game_index: number;
  is_battle_only: boolean;
  move_damage_class: INamedAPIResource | null; // MoveDamageClass
  names: IName[];
}

export interface IMoveStatAffectSets {
  decrease: IMoveStatAffect[];
  increase: IMoveStatAffect[];
}

export interface IMoveStatAffect {
  change: number;
  move: INamedAPIResource; // Move
}

export interface INatureStatAffectSets {
  decrease: INamedAPIResource[]; // Nature
  increase: INamedAPIResource[]; // Nature
}

// Types
export interface IType extends INamedPokeAPIResource {
  damage_relations: ITypeRelations;
  game_indices: IGenerationGameIndex[];
  generation: INamedAPIResource; // Generation
  move_damage_class: INamedAPIResource | null; // MoveDamageClass
  moves: INamedAPIResource[]; // Move
  names: IName[];
  pokemon: ITypePokemon[];
}

export interface ITypePokemon {
  pokemon: INamedAPIResource; // Pokemon
  slot: number;
}

export interface ITypeRelations {
  double_damage_from: INamedAPIResource[]; // Type
  double_damage_to: INamedAPIResource[]; // Type
  half_damage_from: INamedAPIResource[]; // Type
  half_damage_to: INamedAPIResource[]; // Type
  no_damage_from: INamedAPIResource[]; // Type
  no_damage_to: INamedAPIResource[]; // Type
}

// Additional Interfaces
export interface IPokeAPIResource {
  id: number;
}

export interface INamedPokeAPIResource {
  id: number;
  name: string;
}

// Additional Types
export type TPokeAPIEndpoint =
  | 'berry'
  | 'berry-firmness'
  | 'berry-flavor'
  | 'contest-type'
  | 'contest-effect'
  | 'super-contest-effect'
  | 'encounter-method'
  | 'encounter-condition'
  | 'encounter-condition-value'
  | 'evolution-chain'
  | 'evolution-trigger'
  | 'generation'
  | 'pokedex'
  | 'version'
  | 'version-group'
  | 'item'
  | 'item-attribute'
  | 'item-category'
  | 'item-fling-effect'
  | 'item-pocket'
  | 'location'
  | 'location-area'
  | 'pal-park-area'
  | 'region'
  | 'machine'
  | 'move'
  | 'move-ailment'
  | 'move-battle-style'
  | 'move-category'
  | 'move-damage-class'
  | 'move-learn-method'
  | 'move-target'
  | 'ability'
  | 'characteristic'
  | 'egg-group'
  | 'gender'
  | 'growth-rate'
  | 'nature'
  | 'pokeathlon-stat'
  | 'pokemon'
  | 'pokemon-color'
  | 'pokemon-form'
  | 'pokemon-habitat'
  | 'pokemon-shape'
  | 'pokemon-species'
  | 'stat'
  | 'type'
  | 'language';
