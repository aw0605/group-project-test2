export interface User {
  userImg: string;
  userId: string;
}

export interface Heart {
  PostId: string;
  userList: Array<User>;
}

export interface Feed {
  userImg: string;
  userId: string;
  date: string;
  location: string;
  temperature: number;
  postId: string;
  imgs: string[];
  heartCount: number;
  text: string;
  tags: string[];
}
