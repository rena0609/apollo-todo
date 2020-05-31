import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { TasksQuery } from "./queries";
import { tasks } from "../__generated__/types";

export const TaskLists: React.FC = () => {
  const { loading, error, data } = useQuery<tasks>(TasksQuery);
  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div>
      <ul>
        {data!.tasks.map((task) => (
          <li key={task.id}>
            <strong>{task.title}</strong>
            <ul>
              <li>{task.status}</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};
