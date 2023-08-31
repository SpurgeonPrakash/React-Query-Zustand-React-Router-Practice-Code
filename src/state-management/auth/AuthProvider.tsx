import { useReducer } from "react";
import AuthContext from "./authContext";

interface LoginACtion {
  type: "LOGIN";
  username: string;
}

interface LogoutAction {
  type: "LOGOUT";
}

export type AuthAction = LoginACtion | LogoutAction;

const authReducer = (state: string, action: AuthAction): string => {
  if (action.type === "LOGIN") return action.username;
  if (action.type === "LOGOUT") return "";
  return state;
};

interface Props {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(authReducer, "");
  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
