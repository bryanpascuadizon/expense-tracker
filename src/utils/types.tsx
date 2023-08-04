export interface ExpenseType {
  _id: string;
  name: string;
  amount: number;
  dateOfTransaction: string;
  type: string;
  tag: {
    _id: string;
    name: string;
    color: string;
    user_id: string;
  };
  user_id: string;
}

export interface TagType {
  _id: string;
  name: string;
  color: string;
  user_id: string;
}

export interface UserJWTPayload {
  jti: string;
  iat: number;
}
