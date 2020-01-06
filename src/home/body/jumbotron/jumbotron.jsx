import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './jumbotronSlider.css';
import './jumbotron.css';


const content = [
    {
        title: 'Apply to top jobs in Germany',
        description:
            'We connect job seekers with hiring managers at awesome companies',
        button: 'Read More',
        image: 'https://i.imgur.com/1VtMi8y.png',

    },
    {
        title: 'All of the best junior tech jobs in one place',
        description:
            'Filter by location, company and employment type. You can see the job descriptions without creating an account',
        button: 'Read More',
        image: 'https://i.imgur.com/dUPTpRU.png',

    },
    {
        title: 'What is technical interview?',
        description:
            'Technical interviews are common amongst employers recruiting for engineering, science or I.T. roles. Essentially, it’s an interview to assess your technical ability, usually related to the technical knowledge required for the role and the organisation you wish to work for.',
        button: 'Read More',
        image: 'https://i.imgur.com/gFbRJ2J.png',

    }
];

const Jumbotron = () => {
    return (
        <div>
            <Slider className="slider-wrapper">
                {content.map((item, index) => (
                    <div
                        key={index}
                        className="slider-content"
                        style={{ background: `url('${item.image}') no-repeat center center` }}
                    >
                        <div className="inner">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            <button className='jumbotronButton'>{item.button}</button>
                        </div>

                    </div>
                ))}
            </Slider>
        </div>
    )
}


export default Jumbotron;