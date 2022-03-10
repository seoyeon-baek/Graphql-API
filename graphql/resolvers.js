import {people} from "./db";

const resolvers = {
  Query: {
    people: () => people, //person 호출 시 people을 리턴한다.
  },
};

export default resolvers;
