import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import { Courses } from "./pages/Courses.tsx";
import { NavBar } from "./components/NavBar.tsx";
import { SignIn } from "./pages/SignIn.tsx";
import { FilteredProvider } from "./context/FiltersProvider.tsx";
import { Register } from "./pages/Register.tsx";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./context/AuthProvider.tsx";

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <StrictMode>
            <FilteredProvider>
                <AuthProvider>
                    <Toaster />
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<App />}></Route>
                        <Route path="/Courses" element={<Courses />}></Route>
                        <Route path="/SignIn" element={<SignIn />}></Route>
                        <Route path="/Register" element={<Register />}></Route>
                    </Routes>
                </AuthProvider>
            </FilteredProvider>
        </StrictMode>
    </BrowserRouter>
);
