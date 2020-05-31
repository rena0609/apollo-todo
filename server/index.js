const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Mutation {
    createNewTask(input: TaskInput): [Task!]
  }

  input TaskInput {
    id: Int
    title: String!
    status: String
  }

  type Task {
    id: Int
    title: String!
    status: String
  }

  type Query {
    tasks: [Task!]!
  }
`;

const tasks = [
  {
    id: 1,
    title: "Todoアプリを作る",
    status: "未完了",
  },
  {
    id: 2,
    title: "graphQLをマスターする",
    status: "完了",
  },
];

const resolvers = {
  Query: {
    tasks: () => tasks,
  },
  Mutation: {
    createNewTask: (_, { input: { title, status } }) => {
      const id = tasks[tasks.length - 1].id + 1;
      const newTask = {
        id,
        title,
        status,
      };
      tasks.push(newTask);
      return tasks;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
