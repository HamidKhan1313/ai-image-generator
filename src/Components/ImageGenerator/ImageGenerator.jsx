import React, { useRef, useState } from 'react'
import './ImageGenerator.css'
import default_image from '../Assets/default_image.svg'
function ImageGenerator() {
  const [image_url,setImage_url] = useState('/')
  let inputRef = useRef(null)
  const ImageGenerator = async() => {
 if (inputRef.current.value==="") {
  return 0;
 }
 const response = await fetch(
  "https://api.openai.com/v1/images/generations",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      Authorization:
      "Bearer tZ_dnBTtqKaK_h3nXv7v0Fj8V3GMO00wnT3BlbkFJaVkkyqM5bf176_JNIUNHbP9vcpWNLPjQQYxWtqoihQZaVUdnFuX5_zTjokEyCc6ApKLu907ecA",
      "User-Agent": "Chrome"
    },
    body:JSON.stringify({
      prompt:`${inputRef.current.value}`,
      n:1,
      size:"512X512"

    }),
  }
 );
 let data = await response.json()
 console.log(data)
  }
  return (
    <div className='ai-image-generator'>
      <div className="header">Ai image <span>generator</span>
      </div>
      <div className="img-loading">
        <div className="image"><img src={image_url===""?default_image:image_url} alt="" />
            <img src={default_image} alt="" />
        </div>
      </div>
      <div className="search-box">
        <input type="text" ref={inputRef} className='search-input' placeholder='Describe What You Want To See' />
        <div className="generate-btn" onClick={() => ImageGenerator()}>Generate</div>
      </div>
    </div>
  )
}

export default ImageGenerator
