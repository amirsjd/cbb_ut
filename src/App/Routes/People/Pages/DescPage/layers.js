import React from 'react'


export default [
    {
        speed: -0.03,
        children: 
            <div 
                style={{
                    backgroundImage: 'url(/assets/people/bg.jpg)',
                    height: '110vh',
                    position: 'relative',
                    filter: 'brightness(0.5)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 0
                }}
            />
    },
    {
        speed: -0.15,
        children: 
            <div
                style={{
                    position: 'relative',
                    backgroundImage: 'url(/assets/people/city.png)',
                    height: '110vh',
                    filter: 'brightness(0.5)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
    },
]