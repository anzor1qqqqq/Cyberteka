import * as React from 'react';
import { IPropsContext } from "@/types/types";

export const GlobalContext = React.createContext<IPropsContext | null>(null);