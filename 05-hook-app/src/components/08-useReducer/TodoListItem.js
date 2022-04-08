import React from 'react'
import PropTypes from 'prop-types'

export const TodoListItem = ({ todo, indice, handleDelete, handleToggle }) => {
  return (
    <li
        key={ todo.id }
        className="list-group-item"
    >
        <p 
            className={ `${ todo.done && 'complete' }` }
            onClick={ () => handleToggle(todo.id) }
        >
            {indice + 1}. { todo.desc }
        </p>
        <button 
            className='btn btn-danger'
            onClick={ () => handleDelete(todo.id) }
        >
            Borrar
        </button>
    </li>
  )
}

TodoListItem.propTypes = {
    todo: PropTypes.object.isRequired,
    indice: PropTypes.number.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired
}
