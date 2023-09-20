import { Button, Group } from '@mantine/core'
import React, { useState, useRef, useEffect } from 'react'
import {AiOutlineCloudUpload} from 'react-icons/ai'

const UploadImage = ({propertyDetails, setPropertyDetails, nextStep, prevStep}) => {
    const [imageUrl, setimageUrl] = useState(propertyDetails.image)
    const cloudinaryRef = useRef()
    const widgetRef = useRef()

    const handleNext = ()=>{
      setPropertyDetails((prev)=> ({...prev, image: imageUrl}));
      nextStep();
    }

    useEffect(() => {
      cloudinaryRef.current = window.cloudinary;
      widgetRef.current = cloudinaryRef.current.createUploadWidget(
        {
          cloudName: "dqvpliuqk",
          uploadPreset: "qnwukfad",
          maxFiles: "1"
        },
        (err, result)=> {
          if (result.event === "success") {
            setimageUrl(result.info.secure_url)
          }
        }
      )
    }, [])
    

  return (
    <div className='flexColCenter uploadWrapper'>
      {!imageUrl ? (
        <div className='flexColCenter uploadZone' onClick={()=> widgetRef.current?.open()}>
            <AiOutlineCloudUpload size={50} color='grey'/>
            <span>Upload Image</span>
        </div>
      ):(
        <div className='uploadedImage' onClick={()=> widgetRef.current?.open()}>
            <img src={imageUrl} alt="upload" />
        </div>
      )}
      <Group position='center' mt={"xl"}>
          <Button variant="default" onClick={prevStep}>Back</Button>
          <Button onClick={handleNext} disabled={!imageUrl}>Next</Button>
      </Group>

    </div>
  )
}

export default UploadImage
