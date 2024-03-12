import React, { FC, useContext } from 'react'
import GroupCard from './GroupCard'
import { IGroup } from '../types/types'
import { Group, Header, Panel, Spinner } from '@vkontakte/vkui'
import { Context } from '../index';
import { observer } from 'mobx-react-lite';

interface GroupListProps{
  groups: IGroup[];
  isLoading: Boolean
}

const GroupList: FC<GroupListProps> = observer  (({groups, isLoading}) => {

  const fetchError = useContext(Context)?.store.fetchError

  if (isLoading) return(<div><Spinner size="large" style={{ margin: '20px 0' }} /></div>)
  if (fetchError) return(<div><Header className="big-text">При загрузке возникили проблемы</Header></div>)
  if (groups.length === 0) return(<div style={{textAlign: 'center'}}><Header className="big-text">Таких групп нет. Попробуй изменить условие поиска</Header></div>)

  return (
    <Panel id='groups'>
      <Group header={<Header mode="secondary">Список сообществ</Header>}>
        {groups.map((group: IGroup) => <GroupCard key={group.id} group={group}/>)}
      </Group>
    </Panel>
  )
})

export default GroupList