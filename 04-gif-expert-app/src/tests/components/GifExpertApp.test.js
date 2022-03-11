import React from 'react';
import '@testing-library/jest-dom'

import { shallow } from 'enzyme';
import GifExpertApp from "../../GifExpertApp"

describe('Pruebas sobre el componentes de Gif Expert App', () => {

    test('Debe coincidir con el Snapshot', () => {

        const wrapper = shallow(<GifExpertApp />);

        expect( wrapper ).toMatchSnapshot(); 
    });

    test('Debe de mostrar una lista de categorias', () => {

        const categories = ['OPM', 'DB'];

        const wrapper = shallow( <GifExpertApp defaultCategories={ categories } />);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );

    });
});