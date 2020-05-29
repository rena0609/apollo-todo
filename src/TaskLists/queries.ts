import { gql } from "apollo-boost";

//ToDo:型定義ファイルの自動生成
export const TaskListsQuery = gql`
  query TaskLists {
    TaskLists {
      title
      deadline
      status
    }
  }
`;
