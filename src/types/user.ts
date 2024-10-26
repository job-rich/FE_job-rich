interface RegisterInfo {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
}

interface LoginInfo {
  email: string;
  password: string;
}

export type { RegisterInfo, LoginInfo };
