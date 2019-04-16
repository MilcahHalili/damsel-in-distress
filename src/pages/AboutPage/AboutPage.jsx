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
            <div className='About-bottom-section'>
            <div className='About-us'>
            <h5 className='About-Details'>For generations, the term Damsel In Distress has been used to weaken women, suggesting that seeking help is somehow a lesser trait than being the helper. But we are reclaiming this term.
            <br></br><br></br>
            Here at Damsel In Distress we are dedicated to supporting people in crisis by providing a forum for anonymous posting and commenting, allowing people the freedom to seek support without repercussions and judgment. Using common triggerwords, users can tag their own posts by type and screen posts by other users that may be triggering. 
            <br></br><br></br>
            Let's redefine what it means to be a damsel in distress by showing the world that there's power in both sides of the equation. And that it's not always action that needs to be taken. Sometimes, all we need is to be heard. </h5>
            </div>
            <h4 style={{
                fontStyle: "italic"
            }}>To start sharing & supporting, please sign up or login!</h4>
            <div className='About-resources'>
                <Resources />
            </div>
            </div>
        </div>
    )
}

export default AboutPage;