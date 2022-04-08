import { useForm } from '../../hooks/useForm'
import '@testing-library/jest-dom'
import { renderHook, act } from '@testing-library/react-hooks'

describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'Pedro',
        email: 'pedro@mail.com'
    }

    test('Debe de regresar un formulario por defecto', () => {
        const {result} = renderHook(() => useForm(initialForm) );

        const [values, handleInputChange, reset] = result.current;

        expect( values                     ).toEqual   ( initialForm   );
        expect( typeof handleInputChange   ).toBe      ( 'function'    );
        expect( typeof reset               ).toBe      ( 'function'   );
    });

    test('Debe de cambiar el valor del formulario (cambiar name)', () => { 

        const nuevoNombre = 'PedroUpdated';
        const updatedForm = {
            target: {
                name: 'name',
                value: nuevoNombre
            }
        };

        const {result} = renderHook(() => useForm(initialForm) );
        const [, handleInputChange ] = result.current;

        act(() => {
            
            handleInputChange(updatedForm)
            
        });

        const [ values ] = result.current;
        expect(values).toEqual({ ...initialForm, name: nuevoNombre });
    });

    test('Debe de re-establecer el formulario con RESET', () => {
        const nuevoNombre = 'PedroUpdated';
        const updatedForm = {
            target: {
                name: 'name',
                value: nuevoNombre
            }
        };

        const {result} = renderHook(() => useForm(initialForm) );
        const [, handleInputChange, reset ] = result.current;

        act(() => {
            handleInputChange(updatedForm);
            reset();
            
        });

        const [ values ] = result.current;

        expect(values).toBe(initialForm);
    });

});