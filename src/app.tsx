import React from "react";
import { TaskLists } from "./TaskLists/TaskLists";
import { CreateNewTask } from "./CreateNewTask/CreateNewTask";

export const App: React.FC = () => {
  return (
    <>
      <>Todo</>
      <CreateNewTask />
      <TaskLists />
    </>
  );
};
