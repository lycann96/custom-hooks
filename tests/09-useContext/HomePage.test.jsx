import { render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { HomePage } from "../../src/09-useContext/HomePage";

/* eslint-disable no-undef */
describe('Pruebas en <HomePage />', () => { 

    const user = {
        id: 123,
        name: 'Luis Alexander',
        email: 'luis@gmail.com'
    };

    test('debe de mostrar el componente sin el usuario', () => { 
        render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage />
            </UserContext.Provider>    
        );

        const preTag = screen.getByLabelText('pre'); // aria-label

        expect(preTag.innerHTML).toBe('null');
    });

    test('debe de mostrar el componente con el usuario', () => {
        render(
            <UserContext.Provider value={{ user }}>
                <HomePage />
            </UserContext.Provider>    
        );

        const preTag = screen.getByLabelText('pre'); // aria-label

        expect(preTag.innerHTML).toContain(user.name);
        expect(preTag.innerHTML).toContain(user.id.toString());
    });
});