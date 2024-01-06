import { useCallback, useEffect, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const incrementFather = useCallback(
      (value) => {   //value propertie q pasa al hijo al invocar la funcion
        setCounter((c) => c + value);
      },
      [],
    );

    useEffect(() => {
        //incrementFather();
    }, [incrementFather])
    
    return (
        <>
            <h1>useCallback Hook: { counter }</h1>
            <hr />

            <ShowIncrement increment={incrementFather} />
        </>
    )
}
