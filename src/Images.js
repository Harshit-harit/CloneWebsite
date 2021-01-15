
import 'antd/dist/antd.css'
import { Carousel } from 'antd';
function Images() {
    return (

        <>
        <div className="container-fluid p-0 m-0" >
                
                <Carousel pauseOnHover={false} autoplay >
                    <div>
                    <img src='./images/home1.jpg' alt='desktop_home_img' className='img-fluid img-desktop'  />
                    <img src='./images/home_1.jpg' alt='mobile_home_img' className='img-fluid img-mobile' style={{display:'none'}} />

                    </div>
                    <div>
                    
                   <img src='./images/home_3.jpg' alt='desktop_home_img' className='img-fluid img-desktop'  />
                    <img src='./images/home_2.svg' alt='mobile_home_img' className='img-fluid img-mobile' style={{display:'none'}} />
                    </div>
                    <div>
                    <img src='./images/home-2-min.jpg' alt='desktop_home_img' className='img-fluid img-desktop'  />
                    <img src='./images/Home_3.svg' alt='mobile_home_img' className='img-fluid img-mobile' style={{display:'none'}} />
                    </div>
                </Carousel>
                </div>
            </>
    )
}

export default Images;

      
