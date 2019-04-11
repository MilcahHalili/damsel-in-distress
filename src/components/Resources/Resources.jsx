import React from 'react'
import './Resources.css'

const Resources = () => {
    return (
        <div className='Resources'>
            <h3 className='Resource-heading'>need a little more help?</h3>
            <div className='Resource-details'>
                <h4>National Suicide Prevention</h4>
                <h5>call:  1-800-273-8255</h5>
                <a href='https://suicidepreventionlifeline.org/chat/' target='_blank' rel="noopener noreferrer">online chat</a>
            </div>

            <div className='Resource-details'>
                <h4>Self-Harm Hotline</h4>
                <h5>call:  1-877-455-0628</h5>
            </div>

            <div className='Resource-details'>
                <h4>Depression Hotline</h4>
                <h5>call:  1-888-640-5174</h5>
            </div>

            <div className='Resource-details'>
                <h4>Addiction Hotline</h4>
                <h5>call:  1-877-226-3111</h5>
            </div>

            <div className='Resource-details'>
                <h4>Eating Disorder Hotline</h4>
                <h5>call:  1-844-228-2962</h5>
            </div>

        </div>
    )
}

export default Resources