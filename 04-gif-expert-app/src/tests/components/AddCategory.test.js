import React from 'react';
import '@testing-library/jest-dom'

import { shallow } from 'enzyme';
import { AddCategory } from "../../components/AddCategory"

describe('Pruebas en Add Category', () => { 
    

    const setCategories = jest.fn();
    let wrapper;


    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories } /> );

    });


    test('Debe mostrarse correctamente', () => { 
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change', {target: {value: value}});

        const parrafo = wrapper.find('p');

        expect( parrafo.text().trim() ).toBe( value );


    });

    test('No debe de postear la información en el submit', () => {

        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();
    });

    test('Debe de llamar al setCategories y limpiar las cajas de texto', () => {
        const value = 'Hola Mundo';
        const obj = { target: { value: value } };

        // 1. Simular input change
        wrapper.find('input').simulate('change', obj);

        // 2. Simular el submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        //expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith( expect.any( Function ) );

        expect( wrapper.find('input').prop('value')).toBe('');


    })

 });