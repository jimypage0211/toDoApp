import React from "react";
import { useRef } from "react";

const AddForm = ({ setTodo }) => {
    const inputRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        setTodo((prev) => [
            ...prev,
            { id: prev.length + 1, name: inputRef.current.value, done: false },
        ]);
    };
    return (
        <form action="">
            <input
                type="text"
                className="addForm"
                placeholder="addForm"
                ref={inputRef}
            />
            <input type="button" value="Add ToDo" onClick={handleSubmit} />
        </form>
    );
};

export default AddForm;
