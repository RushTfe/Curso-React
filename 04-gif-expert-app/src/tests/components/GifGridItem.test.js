import { GifGridItem } from '../../components/GifGridItem';
import React from 'react';
import { shallow } from 'enzyme'

describe('Pruebas sobre Gif Expert', () => {
    let wrapper;
    const title = 'Titulo del item';
    const url = 'https://localhost/imagen.jpg'

    beforeEach(() => {
        wrapper = shallow(<GifGridItem title={ title } url={ url } />);
    })
    
    test('Debe mostrar el componente correctamente', () => { 
        
        expect( wrapper ).toMatchSnapshot();

     })
})

