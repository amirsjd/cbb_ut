import React from 'react'

export default [
    {
        speed: -0.25,
        children:
            <div style={{
                width: '100%', height: '100%',
                backgroundImage: 'url("/assets/Home/bg-2.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(10%) blur(3px)',
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                
            }} />
        
    },     
    {
        speed: 0,
        style: {
            boxShadow: 'inset 0px 25px 35px -10px black, inset 0px -25px 35px -10px black',
            borderBottom: 0 
        }
    }
]