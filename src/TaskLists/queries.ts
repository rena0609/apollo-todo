import { gql } from "apollo-boost";

export const TasksQuery = gql`
  query tasks {
    tasks {
      id
      title
      status
    }
  }
`;
