import React from 'react'

export default [
    
    {
        speed: 0,
        offset: 0,
        style: {
            position: 'absolute',
            height: '100vh',
            width: '100vw',
            backgroundImage: 'linear-gradient(#CCABDB,#8474A1)'
        }
    },
    {
        speed: 0.1,
        offset: 0,
        children:
            <div style={{
                width: '120%', height: '120%',
                backgroundImage: 'url("/assets/Home/bg-img.jpg")',
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
        img: '',
        speed: 0.5,
        offset: 0,
        children: 
            <img alt="" src="/assets/Home/cell.png"
                style={{
                    position: 'absolute',
                    left: '50%',
                    top: '100vh',
                    transform: 'translate(-50%,-100%)',
                    height: '10vw',
                    zIndex: 20,
                    filter: 'brightness(90%)',
                    opacity: 0.8,
                }} />
    },
    {
        speed: -0.5,
        offset: 0,
        factor: 1,
        children: 
            <img alt="" src="/assets/Home/Tcell.png"
                style={{
                    width: '24vw',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%,-50%)',
                    opacity: 0.85,
                    filter: 'brightness(75%)'
                }} />
    }
]