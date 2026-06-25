export type Status = "Open" | "In progress" | "Done"

export interface ItemTypes {
  id: string,
  name: string,
  status: Status,
  selected: boolean
}

export interface ListTypes {
listTitle: Status,
listItems?: ItemTypes[]
}