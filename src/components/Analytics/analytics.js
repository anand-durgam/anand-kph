import './analytics.css'
import { TiTick } from "react-icons/ti";
import { useEffect } from 'react'

const Analytics = () =>{

    useEffect(() => {
        document.title = 'Analytics - KPH Infotech Pvt Ltd'
    })

    return(
        <>
            <div className='about-container'>

                <div className='about-image-container'>
                    <img className='cloud-computing-image' src='http://183.82.120.80:9999/Servises-Analytics.png' alt='about' />
                </div>
        
                <div className='about-description-container'>

                    <h1 className='primary-heading'>ANALYTICS</h1>
                    <p className='paragraph analytics-para'>
                    Analysis based on past data to help make better business decisions
                    </p>
                    <ul className='pl-0 services-unordered-list'>
                        <div className='unordered-list-box'>
                            <li><TiTick className='tick-mark'/>Revenue trend –best sales/glitches in sales in specific months</li>
                        </div>
                        <div className='unordered-list-box'>
                            <li><TiTick className='tick-mark'/>Competitor Market analysis</li>
                        </div>
                        <div className='unordered-list-box'>
                            <li><TiTick className='tick-mark'/>Sales via different channel analysis (Retail, wholesale, mobile etc.)</li>
                        </div>
                        <div className='unordered-list-box'>
                            <li><TiTick className='tick-mark'/>Product performance (Demographic view , Time view )</li>
                        </div>
                    </ul>

                    <p className='paragraph analytics-para'>
                    Predictive and prescriptive analysis using algorithms and machine learning
                    </p>
                    <ul className='pl-0 services-unordered-list'>
                        <div className='unordered-list-box'>
                            <TiTick className='tick-mark'/><li>Advising specific products to targeted consumers</li>
                        </div>
                        <div className='unordered-list-box'>
                            <TiTick className='tick-mark'/><li>Prediction based on studying typical product behavior to specific consumer class</li>
                        </div>
                    </ul>

                    <p className='paragraph analytics-para'>
                    Manual report automation – helps resource focus on productive issues
                    </p>
                </div>

            </div>
        </>
        
    )
}
export default Analytics