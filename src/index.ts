import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import microConfig from "./mikro-orm.config";

const main = async () => {
  const orm = await MikroORM.init(microConfig);

  // 이건 자동으로 마이그레이션 하는 방법이다.
  // cli로 하는법도 배웠으니 참고하고
  // 난 이게 좋은듯 하다.
  //   await orm.getMigrator().up();

  // 이건 그냥 instance 생성하는거고.
  const post = orm.em.create(Post, { title: "my first post" });
  // 그걸 이제 실제 DB에 넣는것은 아래의 method를 쓴다.
  await orm.em.persistAndFlush(post);
  console.log("----------------sql 2 -----------------");

  // 위에꺼랑 아래꺼랑 둘 다 가능.
  // 근데 그냥 쓰지마라..
  //   await orm.em.nativeInsert(Post, { title: "my first post 2" });
};

// 이건 좀 신기하네.
main().catch((error) => {
  console.log(error);
});
