import { createContext } from "react";
import { ContactContextType } from "../Componenets/Types";

export const Contexted = createContext<ContactContextType | null>(null); 