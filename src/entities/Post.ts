import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Post {
  @PrimaryKey()
  id!: number;

  // type이라는 것을 넣어서 type을 지정해줄 수 있고
  @Property({ type: "date" })
  createdAt: Date = new Date();

  // onUpdate 뭐 이런거 있는데
  // 그냥 칼럼에 대한 option을 object 형태로
  // 던져주면 된다는 것이다.
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt: Date = new Date();

  @Property()
  title!: string;
}
