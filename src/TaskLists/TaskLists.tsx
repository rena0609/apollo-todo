import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_DOGS } from "./TaskList";

export const TaskLists: React.FC = () => {
  //ToDo:型定義ファイルから型の読み込み
  const { loading, error, data } = useQuery<any>(GET_DOGS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return <>{data}</>;
};
