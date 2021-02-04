export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginFormProps {
  loading: boolean;
  onLogin: (credentials: LoginCredentials) => void;
}
