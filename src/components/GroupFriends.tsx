import { Card, CardScroll, CellButton,  SimpleCell } from '@vkontakte/vkui'
import { Icon16UserOutline, Icon24ChevronRightCircle, Icon24ArrowLeftSquareOutline } from '@vkontakte/icons'

import React, { FC, useContext } from 'react'
import { IUser } from '../types/types';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';

interface GroupFriendsProps{
  id: number;
  friends: IUser[];
}

const GroupFriends: FC<GroupFriendsProps> = observer(({id, friends}) => {

  
  const store = useContext(Context)?.store
  const expand = store?.friendsId?.includes(id);
  
  return(
    expand
  ?
    <SimpleCell before={<CellButton onClick={() => store?.setFriendsId(id, false)}><Icon24ArrowLeftSquareOutline/></CellButton>}> 
      <CardScroll size={false}>
        {friends.map(friend =>
          <Card style={{padding:'8px'}} key={friend.first_name + friend.last_name}> 
              {friend.first_name} {friend.last_name}
          </Card>
        )}
      </CardScroll>
    </SimpleCell>

  :
    <SimpleCell
      onClick={() => store?.setFriendsId(id, true)}
      before={<Icon16UserOutline/>} 
      after={<Icon24ChevronRightCircle/>}
    >
      {friends.length} друзей 
    </SimpleCell>
  )
})

export default GroupFriends