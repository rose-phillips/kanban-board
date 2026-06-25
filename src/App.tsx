import './App.css'
import { List } from './components/List'

function App() {
 

  return (
    <div className='app'>
<h1>Issue Tracker</h1>
<main className='board'>
    <List listTitle="Open"/>
    <List listTitle="In progress"/>
    <List listTitle="Done"/>
</main>
    </div>
  )
}

export default App
