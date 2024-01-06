/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

/* eslint-disable no-undef */
describe('Test to <MultipleCustomHooks />', () => { 
    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach( () => {
        jest.clearAllMocks();
    });

    test('should show component by default', () => { 
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });
        render(<MultipleCustomHooks />);

        expect( screen.getByText('Loading...') );
        expect( screen.getByText('BreakingBad Quotes') );

        const nextButton = screen.getByRole('button', { name: 'Next quote'});
        expect( nextButton.disabled ).toBeTruthy();
    });

    test('should show Quote', () => { 
        useFetch.mockReturnValue({
            data: [{ author: 'Luis', quote: 'New phrase introduce'}],
            isLoading: false,
            hasError: null
        });
        render(<MultipleCustomHooks />);
        //screen.debug()
        expect( screen.getByText('New phrase introduce') ).toBeTruthy();
        expect( screen.getByText('Luis') ).toBeTruthy();

        const nextButton = screen.getByRole('button', { name: 'Next quote'});
        expect( nextButton.disabled ).toBeFalsy();   
    });

    test('should call increment function', () => { 
        useFetch.mockReturnValue({
            data: [{ author: 'Luis', quote: 'New phrase introduce'}],
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks />);
        const nextButton = screen.getByRole('button', { name: 'Next quote'});
        fireEvent.click( nextButton );
        

        expect(mockIncrement).toHaveBeenCalled();
    });
});