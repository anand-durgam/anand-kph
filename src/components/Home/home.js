import './home.css'
import { useEffect } from 'react'

const Home = () => {

    useEffect(() => {
        document.title = 'KPH Infotech Pvt Ltd'
    })

    return(
    <>
        <div className='heading-container'>
            <div className='heading-box'>
                <h1 className='primary-heading primary-color' >SOFTWARE FOR SOLUTION</h1>
                <h1 className='heading-two'>Listening to you, and answering with software</h1>
                <h1 className='heading-three'>Listening to you, and answering <br/> with software</h1>
            </div>
            <img className='heading-image' src='http://183.82.120.80:9999/Header-1.png' alt='header' />
        </div>
    </>
    )
}


export default Home