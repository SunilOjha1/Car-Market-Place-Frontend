import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {

    const navigate = useNavigate()

    const handleLogout = async () => {
        await localStorage.removeItem("id")
        await localStorage.removeItem("name")
        await navigate("/login")
    }

    return (
        <>
            <div>
                <Button color='error' variant='contained' onClick={handleLogout}>Logout</Button>
            </div>
        </>
    )
}

export default Logout