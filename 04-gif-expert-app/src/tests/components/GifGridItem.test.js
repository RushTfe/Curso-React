import { GifGridItem } from '../../components/GifGridItem';
import React from 'react';
import { shallow } from 'enzyme'

import '@testing-library/jest-dom';


describe('Pruebas sobre Gif Expert', () => {
    let wrapper;
    const title = 'Titulo del item';
    const url = 'https://localhost/imagen.jpg'

    beforeEach(() => {
        wrapper = shallow(<GifGridItem title={ title } url={ url } />);
    })
    
    test('Debe mostrar el componente correctamente', () => { 
        
        expect( wrapper ).toMatchSnapshot();

     });

     test('Debe tener un parrafo con el title', () => { 
         
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );

      });

    test('Debe tener la imagen igual al url y alt de los props', () => { 
          
        const img = wrapper.find('img');

        expect( img.prop('src')).toBe( url );
        expect( img.prop('alt')).toBe( title );
       });

    test('Debe de tener animate__fadeIn', () => {

        const className = wrapper.find('div').prop('className');
        const expectedClass = 'animate__fadeIn';

        expect( className.includes( expectedClass ) ).toBe( true );
    });
})

