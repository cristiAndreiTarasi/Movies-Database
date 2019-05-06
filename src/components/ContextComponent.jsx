import React, { useState, useEffect, createContext } from 'react';


export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
    const [movies, setMovies] = useState([]);

    const useFetch = (url) => {
        const loadMovies = async () => {
            try {
                const response = await fetch(url);
    
                if (!response.ok) throw Error(response.statusText);
    
                const data = await response.json();
                setMovies(data.results);
                loadRating ();
            } 
            catch (error) {
                console.log(error)
            }
        };
    
        useEffect(() => {
            loadMovies ();
        }, []); 
    };
    
    return (
        <GlobalContext.Provider value={[movies, setMovies]}>
            {props.children}
        </GlobalContext.Provider>
    );
}

