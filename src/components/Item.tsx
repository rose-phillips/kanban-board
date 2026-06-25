import type { ItemTypes } from "../types"

interface ItemProps {
  item: ItemTypes; 
}

export const Item = ({item}: ItemProps) => {

  const itemClass = item.status.toLowerCase().split(" ")[0]
  return (
    <div className={`item-${itemClass}`}>{item.name}</div>
  )
}
