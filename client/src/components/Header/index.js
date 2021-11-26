import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Toolbar } from '@mui/material';

import './index.css';

export default function Header() {
    return (
        <div className='header border-gradient border-gradient-blue'>
            <Toolbar style={{ padding: 0 }}>
                <img src='hackatom.png' className='logo' />
                <div className='header-data'>
                    Phone:+35928798346
                </div>
                <Stack spacing={3} direction="row" className='menu' >
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Button variant="text" className='menu-button' > Home </Button>
                    </Link>
                    <Link to="about-us" style={{ textDecoration: 'none' }}>
                        <Button variant="text" className='menu-button' > About Us </Button>
                    </Link>
                    <Link to="contacts" style={{ textDecoration: 'none' }}>
                        <Button variant="text" className='menu-button' > Contacts </Button>
                    </Link>
                </Stack>
            </Toolbar>
        </div>
    )
}