import React from "react";
import { Card } from "../../components/card";
import { useGetTodosQuery } from "../../redux/service/todo-api";
import { CreateTodoCard } from "../../components/create-card";

export const Home = () => {
  const { data, isLoading } = useGetTodosQuery();

  return (
    <>
      <div className="container">
        <CreateTodoCard />
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.map((item) => (
              <Card key={item.id} {...item} todo={item} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};
