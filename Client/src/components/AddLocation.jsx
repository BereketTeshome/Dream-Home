import React from 'react'
import {useForm} from "@mantine/form"
import { validateString } from '../utils/errorHandler'
import { Button, Group, Select, TextInput } from '@mantine/core'
import useCountries from '../hooks/useCountries'
import Map from './Map'

const AddLocation = ({propertyDetails, setPropertyDetails, nextStep}) => {
    const {getAll} = useCountries()

    const form = useForm({
        initialValues:{
            country: propertyDetails?.country,
            city: propertyDetails?.city,
            address: propertyDetails?.address
        },
        
        validate: {
            country: (value)=> validateString(value), 
            city: (value)=> validateString(value), 
            address: (value)=> validateString(value), 
        }
    })

    const {country, city, address} = form.values;

    const handleSubmit = () => {
        const {hasErrors} = form.validate()
        if (!hasErrors) {
            setPropertyDetails((prev) => ({...prev, city, address, country}))
            nextStep()
        }
    }


  return (
    <form onSubmit={(e) => {
            e.preventDefault()
            handleSubmit()
        }}
    >
        <div className='flexCenter'>
            
            <div className='flexColStart' style={{flex: 1, gap:"1rem"}}>
                <Select 
                    w={"100%"}
                    withAsterisk
                    label="Country"
                    clearable
                    searchable
                    data={getAll()}
                    {...form.getInputProps("country", {type: "input"})}
                />

                <TextInput 
                     w={"100%"}
                    withAsterisk
                    label="City"
                    {...form.getInputProps("city", {type: "input"})}
                />

                <TextInput 
                     w={"100%"}
                    withAsterisk
                    label="Address"
                    {...form.getInputProps("address", {type: "input"})}
                />
            </div>

            <div style={{flex: 1}}>
                <Map
                    country={country}
                    address={address}
                    city={city}
                />
            </div>
        </div>

        <Group position='center' mt={"xl"}>
            <Button type='submit' className='add-btn'>Next Step</Button>
        </Group>

    </form>
  )
}

export default AddLocation
