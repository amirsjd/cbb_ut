import React from 'react'

export default [
    {
        speed: -0.15,
        children:
            <div style={{
                width: '140%', height: '140%',
                backgroundImage: 'url("/assets/home/bg-0.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(75%) blur(10px)',
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
            }} />
    },    
    {
        speed: -0.7,
        children: 
            <img alt="" src="/assets/home/cell.png"
                style={{
                    position: 'absolute',
                    left: 'calc(70% - 4em)',
                    top: 'calc(50% - 4em)',
                    height: '8em',
                    zIndex: 20,
                    filter: 'brightness(90%)',
                    opacity: 0.8,
                    animation: 'anti-spin 30s linear infinite',
                }} />
    },
    {
        speed: 0.5,
        children: 
            <img alt="" src="/assets/Home/Tcell.png"
                style={{
                    width: '20em',
                    position: 'absolute',
                    top: 'calc(50% - 10em)',
                    left: 'calc(70% - 10em)',
                    //transform: 'translate(-50%,-50%)',
                    opacity: 0.85,
                    filter: 'brightness(75%)',
                    animation: 'spin 120s linear infinite',
                }} />
    },

]