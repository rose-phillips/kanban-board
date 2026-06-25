import "./App.css";
import { AddIssueForm } from "./components/AddIssueForm";
import { List } from "./components/List";
import { Status } from "./types";

function App() {
  return (
    <div className="app">
      <h1>Issue Tracker</h1>
      <main className="board">
        {Object.values(Status).map((value) => (
          <List listTitle={value} />
        ))}
        <AddIssueForm />
      </main>
    </div>
  );
}

export default App;
