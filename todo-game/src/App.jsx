import TodoList from './TodoList'
import './App.css'

function App() {
    return (
        <div className="app-container">
            <header>
                <h1>🎮 Todo Game RPG</h1>
                <p>Complete quests to gain XP!</p>
            </header>
            <main>
                <TodoList />
            </main>
        </div>
    )
}

export default App
