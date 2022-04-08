import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutScreen = () => {

	const { user, setUser } = useContext( UserContext );

	const handleLogout = () => {
		setUser({});
	}
  
    return (
        <div>
            <div>AboutScreen</div>
            <hr />
			
			<pre>
				{JSON.stringify(user, null, 3)}
			</pre>

			<button 
				className='btn btn-warning'
				onClick={ handleLogout }	
			>
				Logout
			</button>
			
        </div>
    )
}
