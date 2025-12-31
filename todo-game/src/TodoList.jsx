import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import Todo from "./Todo";
import "./TodoList.css";
import Confetti from 'react-confetti';

export default function TodoList() {
    const [todos, setTodos] = useState([{ id: uuidv4(), text: "Start your adventure!", completed: false }]);
    const [newTodo, setNewTodo] = useState("");
    const [stats, setStats] = useState({ level: 1, xp: 0, nextLevel: 100 });
    const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() => {
        if (showConfetti) {
            const timer = setTimeout(() => setShowConfetti(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [showConfetti]);

    const addXP = (amount) => {
        setStats(prev => {
            let newXP = prev.xp + amount;
            let newLevel = prev.level;
            let newNext = prev.nextLevel;

            if (newXP >= prev.nextLevel) {
                newXP -= prev.nextLevel;
                newLevel += 1;
                newNext = Math.floor(newNext * 1.5);
                setShowConfetti(true); // Level up!
            }
            return { level: newLevel, xp: newXP, nextLevel: newNext };
        });
    };

    const addTodo = () => {
        if (!newTodo.trim()) return;
        setTodos([...todos, { id: uuidv4(), text: newTodo, completed: false }]);
        setNewTodo("");
        addXP(10); // Small XP for adding a task
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(t => t.id !== id));
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(t => {
            if (t.id === id) {
                if (!t.completed) addXP(50); // Big XP for completing!
                return { ...t, completed: !t.completed };
            }
            return t;
        }));
    };

    return (
        <div className="game-container">
            {showConfetti && <Confetti numberOfPieces={200} recycle={false} />}

            <div className="stats-bar">
                <div className="level-badge">Lvl {stats.level}</div>
                <div className="xp-bar-container">
                    <div
                        className="xp-bar-fill"
                        style={{ width: `${(stats.xp / stats.nextLevel) * 100}%` }}
                    ></div>
                    <span className="xp-text">{stats.xp} / {stats.nextLevel} XP</span>
                </div>
            </div>

            <h2 className="inventory-title"> Quest Log </h2>

            <div className="todo-input-group">
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && addTodo()}
                    placeholder="Add a new quest..."
                />
                <button onClick={addTodo}>Add</button>
            </div>

            <div className="list-container">
                {todos.map(todo => (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                    />
                ))}
            </div>
        </div>
    );
}
