export const Status = {
  Open: "Open",
  InProgress: "In progress",
  Done: "Done"
} as const;

export type StatusType = typeof Status[keyof typeof Status]; 

export interface ItemTypes {
  id: string,
  name: string,
  status: StatusType,
  selected: boolean
}

export interface ListTypes {
listTitle: StatusType,
listItems?: ItemTypes[]
}