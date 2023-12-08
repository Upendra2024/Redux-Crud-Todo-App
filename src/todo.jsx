import { useState } from "react";
import { editTodo, deleteTodo } from "./actions";
import { useDispatch } from "react-redux";

function Todo({ id, title }) {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const dispatch = useDispatch();

  const handleTodo = () => {
    if (newTitle.trim()) {
      dispatch(editTodo({ id: id, title: newTitle }));
      setEditing(false);
    }
  };
  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };
  return (
    <div>
      {editing ? (
        <div className="form-group d-flex">
          <input
            className="form-control"
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button className="btn btn-secondary fs-5" onClick={handleTodo}>
            save
          </button>
        </div>
      ) : (
        <li className="list-group-item d-flex justify-content-between align-items-center  ">
          <p className="bg-white fs-5">{title}</p>
          <div className="actions">
            <div className="d-flex bg-white  ">
              <button
                className="btn btn-warning fs-5 m-1"
                onClick={() => setEditing(true)}
              >
                &#9998;
              </button>
              <button
                className="btn btn-danger m-1   fs-6"
                onClick={handleDelete}
              >
                &#9932;
              </button>
            </div>
          </div>
        </li>
      )}
    </div>
  );
}

export default Todo;
