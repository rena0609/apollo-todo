/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createNewTask
// ====================================================

export interface createNewTask_createNewTask {
  __typename: "Task";
  id: number;
  title: string;
  status: string | null;
}

export interface createNewTask {
  createNewTask: createNewTask_createNewTask[] | null;
}

export interface createNewTaskVariables {
  input: TaskInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: tasks
// ====================================================

export interface tasks_tasks {
  __typename: "Task";
  id: number;
  title: string;
  status: string | null;
}

export interface tasks {
  tasks: tasks_tasks[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface TaskInput {
  id: number;
  title: string;
  status?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
