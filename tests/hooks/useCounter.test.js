/* eslint-disable no-undef */

import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe('Pruebas en el useCounter', () => { 
    test('debe de retornar los valores por defecto', () => { 
        const { result } = renderHook( () => useCounter() );
        const { counter, decrement, increment, reset } = result.current;
        expect( counter ).toBe(10);
        expect( decrement ).toEqual( expect.any( Function ) );
        expect( increment ).toEqual( expect.any( Function ) );
        expect( reset ).toEqual( expect.any( Function ) );
    });

    test('debe de generar el counter con el valor de 100', () => { 
        const { result } = renderHook( () => useCounter(100) );
        const { counter } = result.current;
        expect( counter ).toBe(100);
    });

    test('test debe incrementar el contador', () => {
        const { result } = renderHook( () => useCounter() );
        const { increment } = result.current;

        act( () => {
            increment();
            increment(2);
        });
        
        expect(result.current.counter).toBe(13);
    });

    test('test debe decrementar el contador', () => {
        const { result } = renderHook( () => useCounter() );
        const { decrement } = result.current;

        act( () => {
            decrement();
            decrement(2);
        });
        
        expect(result.current.counter).toBe(7);
    });

    test('test debe resetear el contador', () => {
        const { result } = renderHook( () => useCounter() );
        const { increment, reset } = result.current;

        act( () => {
            increment(2);
            reset();
        });
        
        expect(result.current.counter).toBe(10);
    });
});