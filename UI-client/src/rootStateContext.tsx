import React from "react";
import LinkStore from "./store/linkStore";


export interface RootStateContextValue {
    linkStore: LinkStore;
}

const RootStateContext = React.createContext<RootStateContextValue>({} as RootStateContextValue);

const linkStore = new LinkStore();

export const RootStateProvider: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => (
    <RootStateContext.Provider value={{
      linkStore
    }}
    >
        {children}
    </RootStateContext.Provider>
);

export const useRootStore = (): RootStateContextValue => React.useContext(RootStateContext);
