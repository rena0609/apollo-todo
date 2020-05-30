import { gql } from "apollo-boost";

export const TasksQuery = gql`
  query tasks {
    tasks {
      title
      status
    }
  }
`;
