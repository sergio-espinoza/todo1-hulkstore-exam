export interface IPasswordField {
  type: 'text' | 'password',
  icon: 'visibility_off' | 'visibility'
}

export interface IUser {
  _id?: string;
  username: string;
  password?: string;
}
