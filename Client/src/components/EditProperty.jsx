import React, { useState } from 'react'
import {Container, Modal, Stepper} from '@mantine/core'
import AddLocation from './AddLocation'
import UploadImage from './UploadImage'
import BasicDetails from './BasicDetails'
import jwt from 'jwt-decode'
import EditFacilities from './EditFacilities'

const EditProperty = ({opened, setOpened, id}) => {

  const token = document.cookie.split('=')[1]
  const userId = token && jwt(token).userID

  const [active, setActive] = useState(0)
  const [propertyDetails, setPropertyDetails] = useState({
    title:"",
    description:"",
    price:"",
    country:"",
    city:"",
    address:"",
    image:null,
    bedrooms: "",
    parkings: "",
    bathrooms: "",
    createdBy:`${userId}`
  })

  const nextStep = () => {
    setActive((current) => (current < 4 ? current + 1 : current))
  }
  const prevStep = () => {
    setActive((current) => (current > 0 ? current - 1 : current))
  }

  return (
    <Modal
      opened={opened}
      onClose={()=> setOpened(false)}
      closeOnClickOutside
      size={"90rem"}
    >
      <Container h={"40rem"} w={"100%"}>
        <Stepper active={active} onStepClick={setActive} breakpoint="sm" allowNextStepsSelect={false}>

          <Stepper.Step label="Location" description="Address">
            <AddLocation 
              nextStep={nextStep}
              propertyDetails={propertyDetails}
              setPropertyDetails={setPropertyDetails}
            />
          </Stepper.Step>

          <Stepper.Step label="Images" description="Upload">
            <UploadImage 
              prevStep={prevStep}
              nextStep={nextStep}
              propertyDetails={propertyDetails}
              setPropertyDetails={setPropertyDetails}
            />
          </Stepper.Step>

          <Stepper.Step label="Basics" description="Details">
            <BasicDetails 
              prevStep={prevStep}
              nextStep={nextStep}
              propertyDetails={propertyDetails}
              setPropertyDetails={setPropertyDetails}
            />
          </Stepper.Step>

          <Stepper.Step>
            <EditFacilities
              prevStep={prevStep}
              propertyDetails={propertyDetails}
              setPropertyDetails={setPropertyDetails}
              setOpened={setOpened}
              setActiveStep={setActive}
              id={id}
            />
          </Stepper.Step>

          <Stepper.Completed>
            Completed, click back button to get to previous step
          </Stepper.Completed>
        </Stepper>
      </Container>
    </Modal>
  )
}

export default EditProperty
