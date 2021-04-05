import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";

export default {
  entities: [Post],
  dbName: "reddit",
  user: "jinsoo",
  password: "jinsoo",
  debug: !__prod__,
  type: "mysql",
} as Parameters<typeof MikroORM.init>[0];
