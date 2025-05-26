import { createContext } from "react";

type User = {
    name: string;
    email: string;
};

type AuthContextType = {
    user: User | null;
    isAuthenticated: boolean;
    login: (user: User) => void;
    logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);
