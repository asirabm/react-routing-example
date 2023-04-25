import React,{useState} from 'react'
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(false);


    const submitHandler=(e)=>{
      e.preventDefault()
      const configuration = {
        method: "post",
        url: "http://localhost:4000/login",
        data: {
          email,
          password,
        },
      };
      axios(configuration).then(res=>{
        setLogin(true)
        cookies.set("TOKEN", res.data.token, {
          path: "/",
        });
      
      window.location.href = "/auth";

       
      }
      
      )
      .catch(err=>console.log(err))

    }

  return (
    <>
       <h2>Login</h2>
      <Form>
        {/* email */}
        <Form.Group onSubmit={(e)=>{submitHandler(e)}} controlId="formBasicEmail">
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
          onChange={(e=>setPassword(e.target.value))}
        
          placeholder="Password" 
          />
        </Form.Group>

        {/* submit button */}
        <Button variant="primary" onClick={(e)=>{submitHandler(e)}} type="submit">
          Submit
        </Button>
      </Form>
      {login ? (
          <p className="text-success">You Are Logged in Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Logged in</p>
        )}

    
    </>
  )
}

export default Login