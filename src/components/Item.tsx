import { Status, type ItemTypes, type StatusType } from "../types"
import { addItem, setStatus } from "../redux/ItemSlice";
import { useDispatch } from "react-redux";
import { useRef, useState } from "react";


interface ItemProps {
  item: ItemTypes;
}

export const Item = ({ item }: ItemProps) => {
  const dispatch = useDispatch();

  const itemDiv = useRef<HTMLDivElement>(null);

  const HandleSubmitStatus = (data: FormData) => {
    
    const status = data.get("status") as StatusType;
    const updated = {id: item.id, status: status, name: item.name, selected: item.selected}
  
    dispatch(setStatus(updated));
  }


  const itemClass = item.status.toLowerCase().split(" ")[0]
  return (
    <>
      <div className={`item-${itemClass}`} id={item.id} ref={itemDiv}>{item.name}</div>
      <div className="status-change-container">
        <form id={item.id} action={HandleSubmitStatus}>
          <select name="status" id="status" title="status">
            {Object.values(Status).map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
          <input className="form-button" type="submit" value="Add" />
        </form>
      </div>
    </>
  )
}
