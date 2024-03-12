import { IGroup } from "../types/types";

export default function getUniqueColors(groups: IGroup[]): Array<string | undefined>{
  return [...new Set(groups.map((group) => group.avatar_color))];
};