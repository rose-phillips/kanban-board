import type { ItemTypes } from "../types"

interface ItemProps {
  item: ItemTypes; 
}

export const Item = ({item}: ItemProps) => {
  return (
    <div>{item.name}</div>
  )
}
