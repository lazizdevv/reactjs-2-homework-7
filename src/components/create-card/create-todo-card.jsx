import React from "react";
import { useCreateTodoMutation } from "../../redux/service/todo-api";
import { useForm } from "react-hook-form";

export const CreateTodoCard = () => {
  const [createTodo,] = useCreateTodoMutation();
  const { handleSubmit, register, reset } = useForm();

  const submit = (data) => {
    createTodo(data)
      .unwrap()
      .catch((error) => {
        console.log(error);
      });
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <div className="flex justify-center items-center flex-wrap gap-5 my-10 py-10 border border-blue-500 rounded-lg">
          <div className="mb-1">
            <input
              className="bg-transparent border text-white text-xl text-center border-blue-500 focus:outline-none focus:border-2 py-3 px-10 rounded-lg"
              {...register("title")}
              type="text"
              placeholder="Enter Title"
            />
          </div>
          <div>
            <input
              className="bg-transparent border text-white text-xl text-center border-blue-500 focus:outline-none focus:border-2 py-3 px-10 rounded-lg"
              {...register("description")}
              type="text"
              placeholder="Enter Description"
            />
          </div>

          <div className="">
            <button
              className="bg-blue-700 hover:bg-blue-900 font-bold py-4 px-10 rounded-lg text-white"
              type="submit"
            >
              Add ToDo
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
