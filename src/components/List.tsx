import type { ListTypes } from "../types"
import { Item } from "./Item"


//if the item status matches the list title it get pulled into the list

export const List = ({ listTitle }: ListTypes) => {
  return (
    <section className="list-container">
      <h3 className="list-title">{listTitle}</h3>
      <Item/>
    </section>
    
  )
}
