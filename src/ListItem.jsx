import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";

const ListItem = ({ todo, setTodo, listItem }) => {
    const handleCheckedChange = (id) => {
        const tempList = todo.map((item) => {
            if (item.id === id) {
                return { ...item, done: !item.done };
            }
            return item;
        });

        setTodo(tempList);
    };

    const handleDelete = (id) => {
        const tempList = todo.filter((item) => item.id !== id);
        setTodo(tempList);
    };

    return (
        <li
            id={listItem.id}
            key={listItem.id}
            className={`listItem ${listItem.done ? "done" : ""}`}>
            <input
                type="checkbox"
                checked={listItem.done}
                onChange={() => handleCheckedChange(listItem.id)}
            />
            {listItem.name}
            <button
                className="no-border-button"
                onClick={() => handleDelete(listItem.id)}>
                <FaRegTrashCan />
            </button>
        </li>
    );
};

export default ListItem;
