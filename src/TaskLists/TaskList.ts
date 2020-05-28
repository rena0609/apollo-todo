import { gql } from "apollo-boost";

//ToDo:型定義ファイルの自動生成
export const GET_DOGS = gql`
  {
    tasks: 
        {
        title: string,
        deadline: string,
        status: string
      }
  }
`;
