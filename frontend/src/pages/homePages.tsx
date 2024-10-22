import React from 'react'
import Form from '../form'
import ListForm from '../listForm'
import { Button, Link } from '@mui/material'
import {Link as RouterLink} from 'react-router-dom'

function HomePage() {
    return (
        <>
            <ListForm />
            <Link component={RouterLink} to="/form"
                sx={{
                    color: 'black',
                    border: '2px solid gray',
                    borderRadius: '6px',
                    justifyContent: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    mx: 'auto',
                    mt: '10px',
                    width: '300px'
                }}>
                Add Form
            </Link>
        </>
    )
}

export default HomePage