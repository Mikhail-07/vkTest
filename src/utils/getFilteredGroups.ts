import { IFilter } from "../components/GroupFilter";
import { IGroup } from "../types/types";

export default function getFilteredGroups( filter: IFilter, groups: IGroup[]): IGroup[]{
  const { groupStatus, color, friends } = filter;

  let result = groups
  result = filterByColor(result, color)
  result = filterByFriends(result, friends) 
  result = filterByGroupStatus(result, groupStatus)
  return result
};

const filterByColor = (groups: IGroup[], color: string) => {
  if (color === 'all') return groups
  return groups.filter(group => !color ? group.avatar_color === undefined : group.avatar_color === color)
}

const filterByFriends = (groups: IGroup[], friends: string) => {
  if (friends === 'all') return groups
  return groups.filter(group => friends === 'no' ? !group.friends : !!group.friends) 
}

const filterByGroupStatus = (groups: IGroup[], groupStatus: string) => {
  if (groupStatus === 'all') return groups
  return groups.filter(group => groupStatus === 'no' ? group.closed : !group.closed) 
}