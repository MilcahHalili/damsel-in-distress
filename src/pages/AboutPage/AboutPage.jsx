import React from 'react';
import Resources from '../../components/Resources/Resources'
import './AboutPage.css'

const AboutPage = () => {
    return (
        <div className='About'>
            <div className='Def'>
                <h2 className='Def-Heading'>dam·sel in dis·tress</h2>
                <h3 className='Def-Sub-Heading'>/ˈdamzəl/ /in/ /dəˈstres/</h3>
                <br></br>
                <p className='DefTerm'>a young woman in trouble (with the implication that the woman needs to be rescued, as by a prince in a fairy tale).</p>
            </div>
            <h3 className='About-Heading'>about us</h3>
            <h5 className='About-Details'>some sort of description</h5>
            <div className='About-resources'>
                <Resources />
            </div>
        </div>
    )
}

export default AboutPage;