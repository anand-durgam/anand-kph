
import './cloudComputing.css'
import { TiTick } from "react-icons/ti";
import { useEffect } from 'react'

const CloudComputing = () => {

    useEffect(() => {
        document.title = 'Cloud Computing - KPH Infotech Pvt Ltd'
    })

    return(
        <>
            <div className='about-container'>
                <div className='about-image-container'>
                    <img className='cloud-computing-image' src='http://183.82.120.80:9999/Servises-cloud_1.png' alt='about' />
                </div>
                <div className='about-description-container'>
                    <h1 className='primary-heading'>CLOUD COMPUTING</h1>
                    <p className='paragraph'>
                    From our super supportive team, you will get the best AI support
                     no matter the project you are running. From technical issues to
                      management issues, you will get support from us.
                    </p>
                    <ul className='pl-0 mt-4 services-unordered-list'>
                        <div className='unordered-list-box'>
                            <li><TiTick className='tick-mark'/>First class technical support regarding AI to bring solution for your brand</li>
                        </div>
                        <div className='unordered-list-box'>
                            <li><TiTick className='tick-mark cloud-computing-sec-tickmark'/>We offer multiple ways of abstractions to give you more flexibility while choosing the best AI solution for yourself.</li>
                        </div>
                    </ul>
                </div>
            </div>
        </>
        
    )
}

export default CloudComputing