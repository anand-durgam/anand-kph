
import './mobileAndWebRoute.css'
import { TiTick } from "react-icons/ti";
import { useEffect } from 'react'

const MobileAndWebRoute = () => {

    useEffect(() => {
        document.title = 'Mobile & Web Development - KPH Infotech Pvt Ltd'
    })

    return(
        <>
            <div className='about-container mobile-web-container'>
                <div className='about-image-container mobile-web-image-container'>
                    <img className='about-image' src='http://183.82.120.80:9999/about-us-Main.png' alt='about' />
                </div>
                <div className='about-description-container mobile-web-description-container'>
                    <h1 className='primary-heading'>MOBILE APPLICATION & WEBSITE DEVELOPMENT</h1>
                    <br/>
                    <h1 className='mobile-web-description-sub-heading'>Mobile Application</h1>
                    <br/>
                    <ul className='pl-0 services-unordered-list'>
                        <div className='unordered-list-box'>
                            <TiTick className='tick-mark'/><li>Native and Hybrid</li>
                        </div>
                        <div className='unordered-list-box'>
                            <TiTick className='tick-mark'/><li>Special UI designer</li>
                        </div>
                        <div className='unordered-list-box'>
                            <TiTick className='tick-mark'/><li>On premise data</li>
                        </div>
                        <div className='unordered-list-box'>
                            <TiTick className='tick-mark'/><li>Cloud data optimization plan</li>
                        </div>
                    </ul>
                    <br/>
                    <h1 className='mobile-web-description-sub-heading'>Website Development</h1>
                    <br/>
                    <ul className='pl-0 services-unordered-list'>
                        <div className='unordered-list-box'>
                            <TiTick className='tick-mark'/><li>Full stack developer</li>
                        </div>
                        <div className='unordered-list-box'>
                            <TiTick className='tick-mark'/><li>Multiple technology</li>
                        </div>
                        <div className='unordered-list-box'>
                            <TiTick className='tick-mark'/><li>Compatibility</li>
                        </div>
                        <div className='unordered-list-box'>
                            <TiTick className='tick-mark'/><li>Integration with different app via API connectivity</li>
                        </div>
                    </ul>
                </div>
            </div>
        </>
        
    )
}
export default MobileAndWebRoute