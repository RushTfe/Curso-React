import React from 'react';
import '@testing-library/jest-dom'
import { HookApp } from '../HookApp'

import { shallow } from 'enzyme';

describe('Pruebas en HookApp', () => {
    
    let wrapper;

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<HookApp />);
    });

    test('Se debe mostrar correctamente', () => { 
        expect( wrapper ).toMatchSnapshot();
    });

});