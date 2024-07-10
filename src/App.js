import "./App.css";
import Header from "./Header";
import AddForm from "./AddForm";
import ListItem from "./ListItem";
import { useState } from "react";

function App() {
    const [todo, setTodo] = useState([
        {
            id: 1,
            name: "Task1",
            done: false,
        },
        {
            id: 2,
            name: "Task2",
            done: false,
        },
        {
            id: 3,
            name: "Task3",
            done: false,
        },
    ]);

    return (
        <div className="App">
            <Header title={"ToDo List"} />
            <AddForm setTodo={setTodo} />
            <ul className="todo-list">
                {todo.map((listItem) => {
                    return (
                        <ListItem
                            todo={todo}
                            setTodo={setTodo}
                            listItem={listItem}
                        />
                    );
                })}
            </ul>
        </div>
    );
}

export default App;
