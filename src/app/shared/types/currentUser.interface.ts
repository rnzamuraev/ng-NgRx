interface ICurrentUser {
  id: number;
  createAt: string;
  username: string;
  email: string;
  image: string | null;
  updatedAt: string;
  bio: string | null;
  token: string;
}
