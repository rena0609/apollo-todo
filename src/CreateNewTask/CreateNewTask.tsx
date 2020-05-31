import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { createNewTask } from "../__generated__/types";
import { createNewTaskMutation } from "./queries";

export const CreateNewTask: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const [createNewTask] = useMutation<createNewTask>(createNewTaskMutation, {
    update: (cache, result) => {
      const { data } = result;
      cache.writeData({
        data: { tasks: data!.createNewTask },
      });
    },
  });

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.currentTarget;
    switch (input.name) {
      case "title":
        setTitle(input.value);
        break;
      case "status":
        setStatus(input.value);
        break;
    }
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let id = 0;
    createNewTask({ variables: { input: { id, title, status } } });
  };

  return (
    <div>
      <h2>タスクの追加</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>title:</label>
          <input
            value={title}
            onChange={handleInput}
            type="text"
            name="title"
          />
        </div>
        <div>
          <label>status:</label>
          <input
            value={status}
            onChange={handleInput}
            type="text"
            name="status"
          />
        </div>
        <button>作成</button>
      </form>
    </div>
  );
};
