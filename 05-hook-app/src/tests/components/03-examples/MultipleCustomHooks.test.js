import React from 'react';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import { useFetch } from '../../../hooks/useFetch';

jest.mock('../../../hooks/useFetch');

describe('Pruebas en MultipleCustomHooks', () => {

    test('Debe de mostrarse correctamente', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar la información', () => {
        useFetch.mockReturnValue({
            data: [{
                author: 'Pedro',
                quote: 'Hola Mundo'
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks />);


        expect( wrapper.find('.alert').exists() ).toBe( false );
        expect( wrapper.find('.mb-3').text().trim() ).toBe( 'Hola Mundo' );
        expect( wrapper.find('footer').text().trim() ).toBe( 'Pedro' );


    })


})