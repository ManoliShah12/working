import React, { useContext, useEffect } from "react";import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// import { UserContext } from "../App";
// import { UserContext } from "../App";
import { UserContext, App } from '../../App'
import './signUp.css'
import { SignUp } from "../LogIn";


 export const FinalLogIn = () => {
   // let signUpData = localStorage.getItem("data")
 // const {fetchUsers} = useContext(UserContext)

      const paperStyle = {padding :"20px", height: '58vh',width : 300, margin : "2% auto"}
      
      const schema = yup.object().shape({
      //  name: yup.string().name().required(),
        //password: yup.string().min(8).max(32).matches(/[a-zA-Z]/).required(),
      });

      const { handleSubmit, register,formState: { errors } } = useForm({
        resolver: yupResolver(schema),
      });

      const onSubmit = (data) => {
        console.log(data);
     //   signUpData = JSON.parse(signUpData)
       
        
      };
      


    return(
        <Grid>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Paper style={paperStyle} elevation="10" >
          
          <Grid align='center'>  <h1> <u>Sign In :</u> </h1>   </Grid> <br />
       {/* {JSON.stringify(fetchUsers)} */}
          <TextField fullWidth label='Name' placeholder="Enter Name" 
               {...register("exampleRequiredName", { required:true})}/> 
              <span style={{color:'red'}}>{errors.name?.message} </span> <br /> <br />

          <TextField label='Password' placeholder='Enter Password' type='password' fullWidth 
          {...register("examplePwd",
          {required:true})}/>
           <span style={{color:'red'}}>{errors.password?.message}</span>

          <FormControlLabel control={<Checkbox name = "checked" color="primary"/>}
                label="Remember me" /> <br />

          <Button type="submit" color="primary" variant="contained" fullWidth onClick={onSubmit} > Sign In </Button> <br /> <br />
          
                <Typography> Do you have an account ? <n/> <n/>

                <Link to='/LogIn.jsx' >
                  SignUp
                </Link>
        
               </Typography>
         
          </Paper>  
          </form>
         </Grid>

    )
}




