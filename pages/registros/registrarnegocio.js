import Link from "next/link"
import {Formik, Field, Form, ErrorMessage} from 'formik'


export default function registrarnegocio(){
    const publicar = (values) => {
        console.log(values);
    }

    const validar =(values) => {
        const errors ={}
        if(values.password.length < 5) errors.password = 'La constrasena debe ser mayor a 5 digitos'
        return errors;

    }

    return(
        
        <div className="App">
      <Formik
      initialValues={{
        name:"",
        email:"",
        password:""
      }}
      onSubmit={ publicar }
      validate={ validar }
      >

      <Form>
        <h1>nombre</h1>
        <Field name="name" type ="text" />
        <h1>email</h1>
        <Field name="email" type ="email" />
        <h1>password</h1>
        <Field name="password" type ="password" />
        <ErrorMessage name ='password'/>
        <button type="submit">Registrar</button>
      </Form>

      </Formik>

    </div>
    )
}
