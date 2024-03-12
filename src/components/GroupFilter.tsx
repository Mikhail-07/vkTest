import { FormLayoutGroup, Group, Header, Panel } from '@vkontakte/vkui'
import React, { useState, ChangeEvent, useEffect, FC } from 'react'
import { IGroup } from '../types/types';
import MyRadio from './UI/MyRadio';
import MySelect from './UI/MySelect';
import getUniqueColors from '../utils/getUniqueColors';
import getFilteredGroups from '../utils/getFilteredGroups';

interface GroupFilterProps{
  groups: IGroup[];
  setFilteredGroups: React.Dispatch<React.SetStateAction<IGroup[]>>;
}

export interface IFilter {
  groupStatus: string;
  color: string;
  friends: string
}

const GroupFilter: FC<GroupFilterProps> = ({groups, setFilteredGroups}) => {

  const [filter, setFilter] = useState<IFilter>({groupStatus: 'all', color: 'all', friends: 'all'})
  const colors = getUniqueColors(groups)

  useEffect(() => {
    const filteredGroups = getFilteredGroups(filter, groups)
    setFilteredGroups(filteredGroups)
  }, [filter, groups, setFilteredGroups])

  const onChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    id: string
  ) => {
    const value = event.target.value
    setFilter({ ...filter, [id]: value });
  }

  return (
    <Panel id="filter">
      <Group header={<Header mode="secondary">Фильтры</Header>}>
        <FormLayoutGroup mode="horizontal">
          <MyRadio
            id="friends" 
            name='Наличие друзей' 
            options={[{label: 'Да', value: 'yes'}, {label: 'Нет', value: 'no'}]}
            onChange={onChange} 
          />
          <MyRadio
            id="groupStatus" 
            name='Статус группы' 
            options={[{label: 'Открытая', value: 'yes'}, {label: 'Закрытая', value: 'no'}]}
            onChange={onChange} />
          <MySelect
            id="color" 
            name='Цвет аватарки' 
            options={colors}
            onChange={onChange} />
        </FormLayoutGroup>
      </Group>
    </Panel>
  )
}

export default GroupFilter