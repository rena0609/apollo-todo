import { gql } from "apollo-boost";

export const createNewTaskMutation = gql`
  mutation createNewTask($input: TaskInput!) {
    createNewTask(input: $input) {
      id
      title
      status
    }
  }
`;
