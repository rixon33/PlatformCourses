import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

type Props = {
    children: React.ReactNode;
};

const AuthProvider = ({ children }: Props) => {
    const [user, setUser] = useState<null | { name: string; email: string }>(
        null
    );

    useEffect(() => {
        const storedUser = localStorage.getItem("userData");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (userData: { name: string; email: string }) => {
        localStorage.setItem("userData", JSON.stringify(userData));
        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem("userData");
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated: !!user,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
