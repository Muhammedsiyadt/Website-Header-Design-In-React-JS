import './Background.css'
import video1 from '../../assets/video1.mp4'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'

const Background = ({ playStatus, heroCount }) => {

    console.log('::',playStatus);
    return (
        <>
            {playStatus ? (
                <video className='Background fade-in' autoPlay loop muted> 
                    <source src={video1} type='video/mp4' />
                </video>
            ) : (
                <>
                    {heroCount === 0 && <img src={image1} className='Background fade-in' alt="" />}
                    {heroCount === 1 && <img src={image2} className='Background fade-in' alt="" />}
                    {heroCount === 2 && <img src={image3} className='Background fade-in' alt="" />}
                </>
            )}
        </>
    )
}

export default Background
