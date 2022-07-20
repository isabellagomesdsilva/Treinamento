export interface User {
    access_token: string
    user: {
      id: number;
      name: string;
      email: string;
      password: string;
    }
  }