const seoyeon = {
  name: "Seoyeon",
  age: 19,
  gender: "male",
};

const resolvers = {
  Query: {
    person: () => seoyeon, //person 호출 시 seoyeon을 리턴한다.
  },
};

export default resolvers;
