export type Registration = {
  first_name: string;
  last_name: string;
  password: string;
  re_password: string;
  email: string;
  nickname: string;
};

export type Login = {
  email: string;
  password: string;
};

export type LeaveReviewForm = {
  //TODO: rate: boolean;
  description: string;
};
