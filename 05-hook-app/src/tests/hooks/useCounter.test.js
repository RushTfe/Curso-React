import { useCounter } from '../../hooks/useCounter'
import '@testing-library/jest-dom'
import { renderHook, act } from '@testing-library/react-hooks'


describe('Pruebas en useCounter', () => {

    const VALOR_INICIAL = 100;
    const VALOR_POR_DEFECTO = 10;
    const FACTOR = 1;

    test('Debe de retornar valores por defecto', () => {

        const { result } = renderHook( () => useCounter() );

        expect( result.current.counter          )   .toBe( VALOR_POR_DEFECTO);
        expect( typeof result.current.increment )   .toBe('function'        );
        expect( typeof result.current.decrement )   .toBe('function'        );

    });


    test(`Debe de tener el counter en ${VALOR_INICIAL}`, () => {


        const { result } = renderHook( () => useCounter(VALOR_INICIAL) );

        expect( result.current.counter).toBe( VALOR_INICIAL);
    });


    test(`Debe de incrementar el counter en ${FACTOR}`, () => { 
        
        const { result } = renderHook( () => useCounter(VALOR_INICIAL) );
        const { increment } = result.current;

        act( () => {
            increment();
        });

        const { counter } = result.current;
        expect( counter ).toBe(VALOR_INICIAL + FACTOR);

    });


    test(`Debe de decrementar el counter en ${FACTOR}`, () => { 
         
        const { result } = renderHook( () => useCounter(VALOR_INICIAL) );
        const { decrement } = result.current;

        act( () => {
            decrement();
        });

        const { counter } = result.current;
        expect( counter ).toBe(VALOR_INICIAL - FACTOR);
 
    });


    test(`Debe de resetear el counter a ${VALOR_INICIAL}`, () => { 
          
          const { result } = renderHook( () => useCounter(VALOR_INICIAL) );
          const { decrement, reset } = result.current;
  
        act( () => {
            decrement();
            reset();
        });
  
          const { counter } = result.current;
          expect( counter ).toBe(VALOR_INICIAL);
  
    });

});