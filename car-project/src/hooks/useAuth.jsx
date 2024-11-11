import { AuthContext } from "../provaders/AuthProvader";
import { useContext } from "react";

export const useAuth = () => useContext(AuthContext)