module.exports = {
  client: {
    excludes: ["**/__tests__/**/*", "**/@sdk/**/*"],
    service: {
      name: "lily-verse",
      url: "http://localhost:8000/graphql/",
    },
  },
};
