module.exports = {
  client: {
    service: {
      includes: ["./src/**/**.ts"],
      tagName: "gql",
      addType: true,
      localSchemaFile: "./src/schema.json",
      service: {
        // endpoint
        name: "sever",
        url: "http://localhost:4000",
      },
    },
  },
};
