import './App.css'
import { AddIssueForm } from './components/AddIssueForm'
import { List } from './components/List'

function App() {
 

  return (
    <div className='app'>
<h1>Issue Tracker</h1>
<main className='board'>

    <List listTitle="Open"/>
    <List listTitle="In progress"/>
    <List listTitle="Done"/>
      <AddIssueForm/>
</main>
    </div>
  )
}

export default App
