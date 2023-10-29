export interface UserAuthResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: number;
  localId: string;
}
