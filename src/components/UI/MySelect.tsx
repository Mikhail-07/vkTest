import { FormItem, Select } from '@vkontakte/vkui'
import React, { FC, ChangeEvent } from 'react'

interface MySelectProps {
  id: string;
  name: string;
  options: (string | undefined)[];
  onChange: (event: ChangeEvent<HTMLSelectElement>, id: string) => void;
}

const MySelect: FC<MySelectProps> = ({id, name, options, onChange}) => {
  return (
    <FormItem 
      top={name}
      htmlFor={id}
    >
      <Select
        id={id}
        onChange={(e) => onChange(e, id)}
        placeholder="Все"
        options={[
          { label: 'Все', value: 'all' },
          ...options.map((color) => ({
            label: color || 'Без аватарки',
            value: color || '',
          })),
        ]}
      />
    </FormItem>
  )
}

export default MySelect