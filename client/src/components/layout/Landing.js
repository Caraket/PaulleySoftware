import React from 'react'
import Header from '../../Header';
import Jumbotron from '../../Jumbotron';

export const Landing = () => {
    return (
        <div>
             <section>
            <div class="center-cropped">
                <div class="overlay">
                    <div class="container">
                    <Header />
                        <div class="main">
                            <Jumbotron text="I am a web developer from Deer River, Minnesota.  I enjoy building everything from small business
                                    websites to rich scalable web apps.  If your are a business looking for a website or an employer 
                                    looking to hire, you can get in touch with me here"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Landing;