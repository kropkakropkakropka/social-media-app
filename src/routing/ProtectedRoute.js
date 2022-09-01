import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import React from 'react'

const ProtectedRoute = () => {

    const { accessToken } = useSelector((state) => state.profile)

    if (accessToken === null) {
        return (
            <div id='unauthorized' className='center'>
                <h1>Unauthorized</h1>
                <span>
                    <Link to='/'>Login</Link> to gain access
                </span>
            </div>
        )
    }

    return <Outlet /> //returns child route element, in this case - homepage
}

export default ProtectedRoute