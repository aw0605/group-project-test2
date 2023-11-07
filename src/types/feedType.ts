export interface FeedTop {
  userImg: string;
  userId: string;
  date: string;
  location: string;
  temperature: number;
}

export interface Hearts {
  number: number;
  lists: Array<{
    userImg: string;
    userId: string;
  }>;
}

export interface Post {
  userImg: string;
  userId: string;
  date: string;
  location: string;
  temperature: number;
  imgs: {
    [key: string]: string;
  };
  hearts: Hearts;
  text: string;
  tags: string[];
}
