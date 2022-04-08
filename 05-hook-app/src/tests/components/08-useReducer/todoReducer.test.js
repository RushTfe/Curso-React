import { todoReducer } from '../../../components/08-useReducer/todoReducer'
import { demoTodos } from '../../fixtures/demoTodos'
import '@testing-library/jest-dom'

describe('Pruebas sobre todoReducer', () => {

    test('Debe de retornar el estado por defecto', () => {

        const state = todoReducer(demoTodos, {});

        expect( state ).toEqual( demoTodos );
    });

    test('Debe de agregar un todo', () => {

        const newTodo = {
            id: 3,
            desc: 'Aprender Java',
            done: false
        }

        const action = {
            type: 'add',
            payload: newTodo
        }

        const state = todoReducer(demoTodos, action);

        expect( state.length ).toBe(3);
        expect( state ).toEqual([...demoTodos, newTodo]);

    });

    test('Debe de borrar un TODO', () => {
        const idParaBorrar = 2;

        const action = {
            type: 'delete',
            payload: idParaBorrar
        }

        const state = todoReducer(demoTodos, action);

        expect( state.length ).toBe(1);
        expect( state ).toEqual( [demoTodos[0]] );
    });

    test('Debe de hacer el TOGGLE del TODO', () => {
        const idParaToggle = 2;

        const action = {
            type: 'toggle',
            payload: idParaToggle
        }

        const state = todoReducer(demoTodos, action);

        console.log(state)

        expect( state[1].done ).toBe(true);
        expect( state[0]).toEqual(demoTodos[0]);
    });
});