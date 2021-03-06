import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, Radio, RadioGroup, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useState } from 'react';

interface FormData {
    email: string,
    password: string,
    passwordConfirmation: string,
    colourGroup: string,
    animals: {[key: string]: boolean},
    tigerType?: string | null,
}

const COLOURS = ['blue', 'green', 'red', 'black', 'brown'];

export default function Form() {
    const [formData, setFormData] = useState<FormData>({
        email: '',
        password: '',
        passwordConfirmation: '',
        colourGroup: '',
        animals: {
            'bear': false,
            'tiger': false,
            'snake': false,
            'donkey': false },
        tigerType: null
    })

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = event.target;
        formData.animals = {...formData.animals, [name]: checked}
        if (name === 'tiger' && !checked) {
            formData.tigerType = null
        }
        setFormData({...formData})
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        alert(`Form Filled (also printed in console):\n${Object.entries(formData).map(([name, value]) => `${name}: ${value}`).join('\n')}`)
        console.log(formData)
    }

    return (
        <Box sx={{
            width: '50%',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',

            display: 'flexbox',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center'
        }}>
            <form onSubmit={handleSubmit}>
                <TextField required label="Email" name='email' placeholder="john.doe@gmail.com"
                    onChange={handleChange} value={formData.email} type='email'
                    fullWidth sx={{
                        marginTop: '5px',
                        marginBottom: '5px'
                    }} />

                <TextField required label="Password" name='password' type="password"
                    fullWidth onChange={handleChange} value={formData.password}
                    error={formData.password.length < 8}
                    sx={{ marginTop: '5px', marginBottom: '5px' }} />

                <TextField required label="Confirm Password" name='passwordConfirmation'
                    error={formData.password !== formData.passwordConfirmation}
                    type="password" fullWidth onChange={handleChange} value={formData.passwordConfirmation}
                    sx={{ marginTop: '5px', marginBottom: '5px' }} />

                <RadioGroup
                    aria-label="colour" name='colourGroup' row
                    onChange={handleChange} value={formData.colourGroup}
                    sx={{
                        marginTop: '5px',
                        marginBottom: '5px',
                        justifyContent: 'space-evenly'
                    }}>
                    {COLOURS.map(colour => (
                        <FormControlLabel value={colour}
                            label={colour[0].toUpperCase() + colour.substring(1)}
                            control={<Radio />} key={colour} />
                    ))}
                </RadioGroup>

                <FormControl sx={{ display: 'flex', marginTop: '5px' }}>
                    <FormGroup row sx={{ justifyContent: 'space-evenly' }} onChange={handleCheckbox}>
                        {Object.entries(formData.animals).map(([animal, checked]) => (
                            <FormControlLabel value={animal} key={animal}
                                label={animal[0].toUpperCase() + animal.substring(1)}
                                control={<Checkbox key={animal} name={animal}/>}
                            />)
                        )}
                    </FormGroup>
                </FormControl>

                {formData.animals.tiger ? (
                    <TextField required label="Type of Tiger" name='tigerType' placeholder="Burmese"
                    onChange={handleChange} value={formData.tigerType || ""}
                    fullWidth sx={{
                        marginTop: '5px',
                        marginBottom: '5px'
                    }} />
                ) : (<></>)}

                <Box sx={{ marginTop: '15px', display: 'flex', justifyContent: 'space-between' }}>
                    <Button variant='outlined' sx={{marginRight: '5px'}}>Cancel</Button>
                    <Button sx={{marginLeft: '5px'}}
                    disabled={formData.password.length < 8 || formData.password !== formData.passwordConfirmation}
                    type='submit' variant='contained'>Submit</Button>
                </Box>
            </form>
        </Box>
    )
}