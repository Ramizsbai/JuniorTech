import React from 'react';
import IntroAbout from './bodyComponents/introduction/Intro';
import Profiles from './bodyComponents/profiles/Profiles';
import './body.css'
import './responsive-body.about.css'






const Body = () => {



    return (
        <div className='bodyAbout'  >

            <IntroAbout />
            <Profiles />

        </div>
    )
}

export default Body;