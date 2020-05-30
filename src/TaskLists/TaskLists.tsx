import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { TasksQuery } from "./queries";

export const TaskLists: React.FC = () => {
  const { loading, error, data } = useQuery(TasksQuery);
  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return <>Todo:タスクの表示</>;
};

