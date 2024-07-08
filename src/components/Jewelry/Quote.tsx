import React from 'react'
import "./Quote.css"

const Quote = () => {
    return (
        <>
            {/* <div className="quote-block bg-linear py-[60px] bg-[url('https://cdn.shopify.com/videos/c/o/v/d9185fef54ed48d38ec85dd204a74907.mp4')]">
                <div className="container flex items-center justify-center ">
                    <div className="heading3 md:leading-[50px] font-medium lg:w-3/4 px-4 text-center">{String.raw`"`}I absolutely love this shop! The products are high-quality and the customer service is excellent. I always leave with exactly what I need and a smile on my face.{String.raw`"`}</div>
                </div>
            </div> */}
            <div className="ParallaxVideo">
                <video autoPlay muted loop>
                    <source
                    src="/video/para.mp4"
                    type="video/mp4"
                    />
                </video>
            </div>
        </>
    )
}

export default Quote