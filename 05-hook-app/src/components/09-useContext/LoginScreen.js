import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const LoginScreen = () => {

    const { setUser } = useContext(UserContext);


	const handleSetUser = () => {
		let user = {
			id: 1234,
			name: 'Pedro'
		}

		setUser(user)
	}


	return (
		<div>
			<div>LoginScreen</div>
			<hr />
			<button 
				className='btn btn-primary'
				onClick={ handleSetUser }	
			>
				Login
			</button>
			
		</div>
	)
}
