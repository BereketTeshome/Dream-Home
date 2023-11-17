import { Box, Button, Group, NumberInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios"
import { toast } from "react-toastify";

const EditFacilities = ({prevStep, propertyDetails, setPropertyDetails, id}) => {
  
    const [saved, setSaved] = useState(false)
    const navigate = useNavigate()
    

    const form = useForm({
        initialValues: {
          bedrooms: propertyDetails.bedrooms,
          parkings: propertyDetails.parkings,
          bathrooms: propertyDetails.bathrooms,
        },
        validate: {
          bedrooms: (value) => (value < 1 ? "Must have at least one room" : null),
          bathrooms: (value) =>
            value < 1 ? "Must have at least one bathroom" : null,
        },
      });

    const { bedrooms, parkings, bathrooms } = form.values;

  const handleSubmit = () => {
    const { hasErrors } = form.validate();
    if (!hasErrors) {
      setPropertyDetails((prev) => ({
        ...prev, bedrooms, parkings, bathrooms
      }));
    }
    if (!saved) {
      axios.put(`https://dream-home-seven.vercel.app/estate/edit/${id}`, propertyDetails)
      navigate("/properties")

      setTimeout(()=> {
        toast.success('Property Updated!', {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }, 1)
    }
};

  return (
    <Box maw="30%" mx="auto" my="sm">
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <NumberInput
        withAsterisk
        label="No of Bedrooms"
        min={0}
        {...form.getInputProps("bedrooms")}
      />
      <NumberInput
        label="No of Parkings"
        min={0}
        {...form.getInputProps("parkings")}
      />
      <NumberInput
        withAsterisk
        label="No of Bathrooms"
        min={0}
        {...form.getInputProps("bathrooms")}
      />
      <Group position="center" mt="xl">
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        {/* <Button type="submit" color="green" disabled={isLoading}>
          {isLoading ? "Submitting" : "Add Property"}
        </Button> */}
        <Button type="submit" onClick={()=> {setSaved(!saved)}}>{saved ? "Update Property" : "Save Changes"}</Button>
      </Group>
    </form>
  </Box>
  )
}

export default EditFacilities
