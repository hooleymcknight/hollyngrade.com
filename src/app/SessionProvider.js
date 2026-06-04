'use client';
import { createContext, useContext, useState } from "react";

const SessionContext = createContext({
    session: null,
    updateSession: () => {}
});

export default function SessionProvider({ children, session: initialSession }) {
    const [session, setSession] = useState(initialSession);

    const updateSession = (newData) => {
        setSession(prevData => ({ ...prevData, ...newData }));
    };

    if (!session || session?.errorToaster === null) {
        updateSession({ errorToaster: false });
    }

    return (
        <SessionContext.Provider value={{session, updateSession}}>
            {children}
        </SessionContext.Provider>
    );
}

export const useSession = () => useContext(SessionContext);