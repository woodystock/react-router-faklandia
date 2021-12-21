import React, {useEffect, useState} from "react";
import generateMisdemeanours from "../generate_misdemeanours";

export const MisdemeanersContext = React.createContext();

export const MisdemeanersProvider = ({children}) => {

    const [misdemeanours, setMisdemeanours] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchMisdemeanours = async () => {
            try{
                const response = await generateMisdemeanours(20);
                setMisdemeanours(response);
            }
            catch( error ) {
                setError(error);
            }
        }

        fetchMisdemeanours();
    }, [setMisdemeanours]);

    return (
        <MisdemeanersContext.Provider value={[misdemeanours, error]}>
            {children}
        </MisdemeanersContext.Provider>
    )
}
