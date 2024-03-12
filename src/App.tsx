import React, { useContext, useEffect, useState } from 'react'
import '@vkontakte/vkui/dist/vkui.css';
import GroupFilter from './components/GroupFilter'
import GroupList from './components/GroupList'
import { IGroup } from './types/types';
import { fetchGroups } from './http/groupAPI';
import { Context } from '.';

const App = () => {
  const [groups, setGroups] = useState<IGroup[]>([])
  const [filteredGroups, setFilteredGroups] = useState<IGroup[]>([])
  const [isLoading, setLoading] = useState<Boolean>(true)

  const store = useContext(Context)?.store

  useEffect(() => {
    fetchGroups()
      .then(res => {
        if (res.data) {
          setGroups(res.data)
          setFilteredGroups(res.data)
        } else {
          store?.setFetchError()
        }
      })
      .finally(() => setLoading(false))
  }, [store])

  return (
    <div>
      <GroupFilter groups={groups} setFilteredGroups={setFilteredGroups}/>
      <GroupList groups={filteredGroups} isLoading={isLoading}/>
    </div>
  )
}

export default App