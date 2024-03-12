import React, { FC } from 'react'
import GroupInfo from './GroupInfo'
import { IGroup } from '../types/types'
import { Avatar, SimpleCell } from '@vkontakte/vkui'

interface GroupCardProps{
  group: IGroup;
}

const GroupCard: FC<GroupCardProps> = ({group}) => {
  return (
    <div style={{borderBottom: '1px solid lightGrey'}}>
      <SimpleCell before={<Avatar size={100} style={{ backgroundColor: `${group.avatar_color}` }} />}>
        <GroupInfo group={group}/>
      </SimpleCell>
    </div>
  )
}

export default GroupCard