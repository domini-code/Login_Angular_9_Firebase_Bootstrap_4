export interface User {
  uid: string;
  email: string;
  displayName: string;
  emailVerified: boolean;
  password?: string;
}
