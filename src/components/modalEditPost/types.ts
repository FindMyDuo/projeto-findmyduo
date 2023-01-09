export interface IPost {
  title: string;
  content: string;
  userId?: string | undefined;
  id: number;
}

export interface IModalEdit {
  post: IPost;
}
