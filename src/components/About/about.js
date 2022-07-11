
import './about.css'
import { useEffect } from 'react'

const About = () => {

    useEffect(() => {
        document.title = 'About Us - KPH Infotech Pvt Ltd'
    })

    return(
        <>
            <div className='about-container'>
                <div className='about-image-container'>
                    <img className='about-image' src='http://183.82.120.80:9999/Aboutus.png' alt='about' />
                </div>
                <div className='about-description-container'>
                    <h1 className='primary-heading'>OVERVIEW</h1>
                    <p className='paragraph'>
                    KPH infotech is an IT start-up started by the partners who are the promoters of
                    biotech companies Intron Life Sciences private limited and Exome Life Sciences 
                    private limited. The partners have a strong presence in different countries via
                    their companies and also decade experience and expertise in IT from Development,
                     coding to business intelligence, data quality and data warehousing. With a keen eye 
                     for innovation KPH infotech is focused on excellence and quality delivery for all 
                     the projects and our motto is “to meet excellence through innovation”.
                    </p>
                </div>
            </div>
        </>
        
    )
}
export default About