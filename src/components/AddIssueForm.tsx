import { useDispatch } from "react-redux";
import { addItem } from "../redux/ItemSlice";
import { Status } from "../types";
import type {StatusType} from "../types"

export const AddIssueForm = () => {

const dispatch = useDispatch();

const HandleSubmit = (data: FormData) => {
    const name = data.get("name") as string;
    const status = data.get("status") as StatusType;
    dispatch(addItem({
      id: crypto.randomUUID(),
      name: name,
      status: status,
      selected: false,
    }));
} 

  return (
    <div className="form-container">
      <h2>Add item</h2>
      <form action={HandleSubmit}>
        <label htmlFor="name">Task name:</label>
        <input type="text" id="name" name="name" required/>
        <label htmlFor="status">Task status:</label>
        <select name="status" id="status" title="status">
          {Object.values(Status).map((value) => (
            <option key={value}>{value}</option>
          ))}
        </select>
        <input className="form-button" type="submit" value="Add" />
      </form>
    </div>
  );
};
