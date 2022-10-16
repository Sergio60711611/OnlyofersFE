import { Button, Box, TextField } from "@mui/material"
import { Field, Form, Formik } from "formik"
import {object, string} from "yup"
import style from '../styles/material-form.module.css'

const MaterialForm = () => {
    return (
        <div className={style.MaterialForm}>
            <Formik>
                
                    <Form>
                        <Field 
                        name="email"
                        type="email"
                        as={TextField}
                        variant="outlined"
                        color="primary"
                        label="Email"
                        fullwidth
                        />
                        <Box height={14} />
                        <Field 
                        name="name"
                        type="name"
                        as={TextField}
                        variant="outlined"
                        color="primary"
                        label="Name"
                        fullwidth
                        />
                        <Box height={14} />
                        <Field 
                        name="password"
                        type="password"
                        as={TextField}
                        variant="outlined"
                        color="primary"
                        label="Password"
                        fullwidth
                        />
                        <Box height={14} />
                        
                        <Button>Sign up</Button>
                    </Form>
                
            </Formik>
        </div>
    )
}

export default MaterialForm