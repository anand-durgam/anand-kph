import './dataQuality.css'
import { TiTick } from "react-icons/ti";
import { useEffect } from 'react'

const DataQuality = () => {

    useEffect(() => {
        document.title = 'Data Quality - KPH Infotech Pvt Ltd'
    })

    return(
        <>
            <div className='about-container data-quality-container'>
                <div className='about-image-container'>
                    <img className='about-image data-quality-image' src='http://183.82.120.80:9999/Data-quality_1.png' alt='about' />
                </div>
                <div className='data-quality-content-container'>
                    <h1 className='primary-heading'>DATA QUALITY AND TESTING</h1>
                    <ul className="services-unordered-list data-quality-content">
                        <div className='unordered-list-box'>
                            <li><TiTick className='tick-mark data-quality-tickmark'/>Data Profiling help identify data flaws and anomalies in data</li>
                        </div>
                        <div className='unordered-list-box'>
                            <li><TiTick className='tick-mark data-quality-tickmark'/>Automated data rules help in constant data health check up and alerts in case of any anomalies or the limit reaches a specified threshold</li>
                        </div>
                        <div className='unordered-list-box'>
                            <li><TiTick className='tick-mark data-quality-tickmark'/>Testing helps to validate the functionality of a software , load and stress during peak hour , security threats</li>
                        </div>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default DataQuality