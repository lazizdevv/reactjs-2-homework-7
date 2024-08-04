import React, { useState } from "react";
import { useDeleteTodoMutation } from "../../redux/service/todo-api";
import { Modal } from "../modal";
import { EditTodoForm } from "../edit-card";

export const Card = ({ title, description, id, todo,}) => {
  const [deleteTodo] = useDeleteTodoMutation();
  const handleDelete = (id) => {
    deleteTodo(id);
  };

  const [isModalOpen, setModalOpen] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

  const handleEditClick = (id) => {
    setCurrentTodo(id);
    setModalOpen(true);
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="border-2 border-blue-500 rounded-lg p-5 max-w-[500px] w-full bg-gray-500/10 text-white">
          <div className="flex flex-col gap-5 mb-10">
            <h1 className="text-xl">
              <span className="font-bold">Title:</span> {title}
            </h1>
            <h1 className="text-xl">
              <span className="font-bold">Description:</span> {description}
            </h1>
          </div>
          <div className="flex gap-5 justify-end text-white font-bold">
            <button
              className="rounded-lg py-2 px-5 bg-red-500 hover:bg-red-700"
              onClick={() => handleDelete(id)}
            >
              Delete
            </button>
            <button
              onClick={() => handleEditClick(id)}
              className="rounded-lg py-2 px-5 bg-yellow-500 hover:bg-yellow-700"
            >
              Edit
            </button>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        {currentTodo && (
          <EditTodoForm
            todo={todo}
            onClose={() => setModalOpen(false)}
          />
        )}
      </Modal>
    </>
  );
};
