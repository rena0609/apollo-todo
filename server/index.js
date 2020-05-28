const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Task {
    title: String
    deadline: String
    status: String
  }

  type Query {
    tasks: [Task]
  }

  type Mutation {
    addTask(title: String, deadline: String, status: String): Task
  }
`;

const tasks = [
  {
    title: "Todoアプリを作る",
    deadline: "2020/05/31",
    status: "未完了",
  },
  {
    title: "graphQLをマスターする",
    deadline: "2020/06/20",
    status: "完了",
  },
];

const resolvers = {
  Query: {
    tasks: () => tasks,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
