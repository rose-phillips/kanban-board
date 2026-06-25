import type { ListTypes } from "../types"
import { Item } from "./Item"
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../redux/ItemSlice";
import type { RootState } from "../redux/store";
import { useEffect } from "react";


//if the item status matches the list title it get pulled into the list

export const List = ({ listTitle }: ListTypes) => {

    const dispatch = useDispatch();
  
    const items = useSelector((state: RootState) => state.item.items);
  
      useEffect(() => {
      fetch('http://localhost:3000/items')
        .then((response) => response.json())
        .then((data) => dispatch(setItems(data)))
        .catch((error) => console.log(error));
    }, [dispatch]);
  return (
    <section className="list-container">
      <h3 className="list-title">{listTitle}</h3>
     {items.map((item) => { 
    if (item.status === listTitle) {
      return <Item key={item.id} item={item} />;
    }
    return null; 
  })}
      
    </section>
    
  )
}
