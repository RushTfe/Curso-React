import React from 'react';
import '@testing-library/jest-dom'

import { shallow } from 'enzyme';
import { GifGrid } from "../../components/GifGrid"
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs')

describe('Pruebas sobre el componentes de GifGrid', () => {

    // let wrapper;
    const category = 'One Punch2';

    // beforeEach(() => {

    //     wrapper = shallow(<GifGrid category={ category } />);

    // });

    test('Debe renderizar el componente correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={ category } />);
        expect( wrapper ).toMatchSnapshot();
        
    });

    test('Debe de mostrar cuando se cargan imágenes', () => {


        const gifs = [{
            id: 'ABC',
            url: 'https://test/cualquier.jpg',
            title: 'Tituloooo'
        }];
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={ category } />);
        
        //expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists()).toBe( false );

        expect( wrapper.find('GifGridItem').length ).toBe(gifs.length);

    });

})