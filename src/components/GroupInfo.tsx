import React, { FC } from 'react'
import { IGroup } from '../types/types'
import { Header, SimpleCell } from '@vkontakte/vkui';
import { Icon16LockOutline, Icon16UnlockOutline, Icon16Users2Outline} from '@vkontakte/icons'
import GroupFriends from './GroupFriends';

interface GroupInfoProps{
  group: IGroup
}

const GroupInfo: FC<GroupInfoProps> = ({group}) => {

  const { id, name, closed, members_count, friends } = group;

  return (
    <div>
      <Header mode="primary" size="large">{name}</Header>
      <SimpleCell before={closed ? <Icon16LockOutline/> : <Icon16UnlockOutline/>}> {closed ? 'Закрытое сообщество' : 'Открытое сообщество'}</SimpleCell>
      {members_count > 0 && <SimpleCell before={<Icon16Users2Outline/>}> {members_count} подписчиков  </SimpleCell>}
      {friends && <GroupFriends id={id} friends={friends}/>}
    </div>
  )
}

export default GroupInfo