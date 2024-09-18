import React from "react";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import BackArrow from "./BackArrow";
import Search from "./Search";
import Pokeball from "./Pokeball";
import Bug from "./Bug";
import Dark from "./Dark";
import Dragon from "./Dragon";
import Electric from "./Electric";
import Fairy from "./Fairy";
import Fighting from "./Fighting";
import Fire from "./Fire";
import Flying from "./Flying";
import Ghost from "./Ghost";
import Grass from "./Grass";
import Ground from "./Ground";
import Ice from "./Ice";
import Normal from "./Normal";
import Poison from "./Poison";
import Psychic from "./Psychic";
import Rock from "./Rock";
import Steel from "./Steel";
import Water from "./Water";

const icons = {
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  backArrow: BackArrow,
  search: Search,
  pokeball: Pokeball,
  bug: Bug,
  dark: Dark,
  dragon: Dragon,
  electric: Electric,
  fairy: Fairy,
  fighting: Fighting,
  fire: Fire,
  flying: Flying,
  ghost: Ghost,
  grass: Grass,
  ground: Ground,
  ice: Ice,
  normal: Normal,
  poison: Poison,
  psychic: Psychic,
  rock: Rock,
  steel: Steel,
  water: Water,
};

type IconProps = {
  name:
    | "arrowLeft"
    | "arrowRight"
    | "backArrow"
    | "search"
    | "pokeball"
    | "bug"
    | "dark"
    | "dragon"
    | "electric"
    | "fairy"
    | "fighting"
    | "fire"
    | "flying"
    | "ghost"
    | "grass"
    | "ground"
    | "ice"
    | "normal"
    | "poison"
    | "psychic"
    | "rock"
    | "steel"
    | "water";
  width: number;
  height: number;
  color: string;
  strokeWidth: number;
};

export default function Icon({
  name = "pokeball",
  width,
  height,
  color,
  strokeWidth,
}: Partial<IconProps>) {
  const IconComponent = icons[name];
  return (
    <IconComponent
      width={width || 24}
      height={height || 24}
      color={color || "#000"}
      strokeWidth={strokeWidth || 2}
    />
  );
}
