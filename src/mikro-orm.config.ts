import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

export default {
  entities: [Post],
  dbName: "reddit",
  user: "jinsoo",
  password: "jinsoo",
  debug: !__prod__,
  type: "mysql",
  migrations: {
    // 여기에다가 마이그레이션 정보를 넣겠다는 그런 의미인듯.
    // __dirname은 절대경로를 return하고 조인을 하겠다는건 concat 한다고
    // 이해를 하면 될 듯.
    path: path.join(__dirname, "./migrations"),
    // ts랑 js를 적용한다는 것임.
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
} as Parameters<typeof MikroORM.init>[0];

// Parameters 어쩌구 써준것은
// index.ts에서 import해서 적용하는데
// type이 안맞다고 뭐라고 해서 그럼.
// 저렇게 하면은 type이 맞춰진다고 하는데 자세한건 모르겠음.
// 나중에 알아봐야 할 듯.
// 엄청 중요한건 아니고 그냥 하나의 팁으로 보면 될 듯.
