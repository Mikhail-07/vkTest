import { FormItem, Radio, RadioGroup } from '@vkontakte/vkui'
import React, { FC, ChangeEvent } from 'react'

interface MyRadioProps {
  name: string;
  id: string;
  options: Array<{
    label: string;
    value: string;
  }>;
  onChange: (event: ChangeEvent<HTMLInputElement>, id: string) => void;
}

const MyRadio: FC<MyRadioProps> = ({id, name, options, onChange}) => {

  return (
    <FormItem 
      top={name}
    >
      <RadioGroup>
        <Radio name={id} value="all" defaultChecked onChange={(event) => onChange(event, id)}>
          Все
        </Radio>
        {options.map((option) => 
          <Radio name={id} value={option.value} key={option.value} onChange={(event) => onChange(event, id)}>
            {option.label}
          </Radio>)}
      </RadioGroup>
    </FormItem>
  )
}

export default MyRadio