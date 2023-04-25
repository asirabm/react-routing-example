import React,{useState} from 'react'
import { Form, Button } from "react-bootstrap";
import axios from "axios";


function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [register, setRegister] = useState(false);

    function SubmitHandler(e){
      e.preventDefault();
      const configuration = {
        method: "post",
        url: "http://localhost:4000/register",
        data: {
          email,
          password,
        }}
      axios(configuration).then((res)=>{
        setRegister(true)
      console.log('Hello')
      })
      .catch(err=>console.log(err))
    }

  return (
    <>
       <h2>Register</h2>
      <Form>
        {/* email */}
        <Form.Group onSubmit={(e)=>SubmitHandler(e)} controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
          type="email"
          name="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          placeholder="Enter email" />
        </Form.Group>

        {/* password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
          type="password"
          name="password"
          value={password}
          placeholder="Password" 
          onChange={(e=>setPassword(e.target.value))}
          />
        </Form.Group>

        {/* submit button */}
        <Button variant="primary" type="submit" onClick={(e) => SubmitHandler(e)}>
          Submit
        </Button>
      </Form>
      {register ? (
          <p className="text-success">You Are Registered Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Registered</p>
        )}

    
    </>
  )
}

export default Register