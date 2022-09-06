import React, { useEffect } from "react";
import { useForm , Controller } from "react-hook-form";
import './Login.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";


export const SignUp =() => {
//const navigate = useNavigate();

  const [formData,setFormData] =React.useState({})

  const { register, handleSubmit,resetField,control,watch, formState: { errors } } = useForm({
    defaultValues: {
      checkbox: false,
    }
  });
  const onSubmit = data => {
    console.log(data)
    setFormData(data)
   
  }

  const onResetForm = () => {
    resetField("firstName")
    resetField("exampleSurname")
    resetField('exampleRequiredEmail')
    resetField('examplePwd')
    resetField('exampleBday')
    resetField('exampleAddress')
    resetField('checkbox')
    resetField('Age')
    resetField('radio')
    resetField('state')
    resetField('fileName')
  }
  
  useEffect(()=>{
    console.log(formData)
  },[formData])

 

  return (
    
   <div className='card_style'> 
    <Card>
    <Form className="card_design1" onSubmit={handleSubmit(onSubmit)}>
        <h1>SIGN-UP</h1>
    <Grid container spacing={3}>
    <Grid  xs={12} sm={6}>
    <Form.Group className='mb-3' controlId='formBasicName'>
     <Form.Label>Name:</Form.Label>
        <Form.Control type='text' placeholder='First-Name'
         {...register("firstName",{required:true,maxLength:20})}></Form.Control>
         {errors.example && <span> This field is required</span>}
    </Form.Group>
    </Grid>
    <Grid xs={12} sm={6}>
    <Form.Group className='mb-3'controlId="formBasicSurname">
     <Form.Label>Surname:</Form.Label>
        <Form.Control type='text' placeholder='Surname'
         {...register("exampleSurname",{required:true})}></Form.Control>
         {errors.exampleSurname && <span> This field is required</span>}
    </Form.Group>
    </Grid>
    </Grid>
    <Grid container spacing={2}>
    <Grid xs={12}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control type="email" placeholder="Enter email"
         {...register("exampleRequiredEmail", { required:true,pattern:/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/ })} />
         
         {errors.exampleRequiredEmail && <span>Enter in this format :username@gmail.com</span>}
      </Form.Group>
      </Grid>
      <Grid xs={12}>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" placeholder="Password" 
         {...register("examplePwd",
         {required:true,pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/})}/>
       {errors.examplePwd&&<span>Should Contain one Capital aphabet,one numeric value and one alphanumeric value</span>}
      </Form.Group>
      </Grid>
      </Grid>
      <Grid container spacing={2}>
      <Grid xs={12} sm={6}>
      <FormGroup>
        <Form.Label>BirthDay:</Form.Label>
        <Form.Control type='date' 
       min="2020-05-01" max="2030-12-31"
       {...register('exampleBday',{
        required:true })}
       ></Form.Control>
       {errors.exampleBday&&<span>Selected the date properly</span>}
      </FormGroup>
      </Grid>
      <Grid xs={12}>
        <Form.Group>
            <Form.Label>Address:</Form.Label>
            <Form.Control type='text'className='area'{...register('exampleAddress',{
                required:true})}></Form.Control>
            {errors.exampleAddress&&<span>Write your full address</span>}
        </Form.Group >
    </Grid>
      </Grid>
        
      <FormControl>
      <FormLabel id="demo-radio-buttons-group-label" >Gender:</FormLabel>
      <Grid container spacing={3}>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group">
        <Grid xs={4}>
        <FormControlLabel {...register("radio")} value="female" control={<Radio />} label="Female"/>
        </Grid>
        <Grid xs={4}>
        <FormControlLabel  {...register("radio")}value="male" control={<Radio />} label="Male" />
        </Grid>
        <Grid xs={4}>
        <FormControlLabel {...register("radio")} value="other" control={<Radio />} label="Other" />
        </Grid>

      </RadioGroup>
      </Grid>
    </FormControl>
    
    <Grid>
    <Form.Group>
    <Form.Label>State:</Form.Label>
      <select {...register("state")}>
        <option value="">Select...</option>
        <option value="gj">Gujarat</option>
        <option value="mh">Maharastra</option>
        <option value="mp">Madhya pradesh</option>
        <option value="TS">Telengana</option>
      </select>
    </Form.Group>
    </Grid>
    <Grid>
        <Form.Group>
              <Form.Label>Upload Document</Form.Label>
             <input type='file' {...register('fileName',{required:true})}></input>
        </Form.Group>      
        </Grid>
        <Grid>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Yes,I agree to all Term,Privacy Policy"
        {...register("checkbox",{required:'true'})} />
        {errors.exampleCheckbox && <span>Mandatory to select</span>}
      </Form.Group>
    </Grid>
    <Grid>
      <Button  type="submit" onClick={onSubmit}>
                            
                            <div>
                                <Link to="/signUp.jsx">Submit</Link>
                            </div>
      </Button>
      </Grid>
      <Grid>
      <div>
      <Button type="button" onClick={onResetForm} className="btn btn-secondary">Reset</Button>
      </div>
    </Grid>
    </Form>
    </Card>
  
  </div>
  );
}