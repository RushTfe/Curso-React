import { useFetchGifs } from '../../hooks/useFetchGifs'
import { renderHook } from '@testing-library/react-hooks'


describe('Pruebas en el hook useFetchGifs', () => {

    const category = 'OPM';

    test('Debe retornar el estado inicial', async () => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( category ));
        
        await waitForNextUpdate();
        
        const { data, loading } = result.current;

        expect( data.length ).toBe( 10 );
        expect( loading ).toBe( false );
    });

    test('Debe retornar un arreglo de imgs y el loading en false', async () => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( category ));

        await waitForNextUpdate();
        const { data, loading } = result.current;


    });

});