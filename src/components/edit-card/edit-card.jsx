import React from "react";
import { useForm } from "react-hook-form";
import { useEditTodoMutation } from "../../redux/service/todo-api";

export const EditTodoForm = ({ todo, onClose,}) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: todo.title,
      description: todo.description,
    },
  });
  
  const [updateTodo] = useEditTodoMutation();

  const onSubmit = (data) => {
    updateTodo({
      id: todo.id,
      ...data,
    });
    reset();
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-center my-4 font-bold text-lg text-gray-700">
        Editing
      </h1>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="title"
        >
          Title:
        </label>
        <input
          type="text"
          id="title"
          {...register("title")}
          className="shadow-lg border border-blue-500 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-2 focus:outline-blue-500 focus:bg-slate-300"
        />
      </div>
      <div className="mb-5">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="description"
        >
          Description:
        </label>
        <input
          type="text"
          id="description"
          {...register("description")}
          className="shadow-lg border border-blue-500 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-2 focus:outline-blue-500 focus:bg-slate-300"
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-10 rounded-lg"
        >
          Save
        </button>
      </div>
    </form>
  );
};
