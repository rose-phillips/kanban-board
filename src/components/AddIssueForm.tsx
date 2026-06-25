import { Status } from "../types"


export const AddIssueForm = () => {
  return (
    <div className="form-container">
      <h2>Add item</h2>
      <form action=""> 
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" />
        <label htmlFor="status">Status:</label>
        <select name="status" id="status" title="status">
        {Object.values(Status).map((value) => (
        <option key={value}>{value}</option>
      ))}
        </select>
        <input className="form-button" type="submit" value="Add"/>
    </form>
    </div>

  )
}
