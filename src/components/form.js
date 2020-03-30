import React from 'react'
import styled, { css } from 'styled-components'

const Button = styled.button`
  background:#523AB3;
  border:0px;
  border-radius: 2px;
  color: #fff;
  margin: 0.5em 1em;
  padding: 0.7em 1em;
    font-family: 'Oswald', sans-serif;
  font-size:20px;


  &:hover { 
    background:#3A2394;
    color: #fff;
  
  }
`




const Input = styled.input`
  background: transparent;
  border-radius: 2px;
  border: 0px;
  color: #fff;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  font-family: 'Oswald', sans-serif;
  width:300px;
  height:50px;
  border: 1px solid #3A2394;
  font-size:20px;


  &:hover { 
   
  }
  
  
`

const Form = (props) => {
    return (
   <div>
<form onSubmit={props.weatherMethod}>
<Input type='text' name='city' placeholder='город'/>
<Button>Получить погоду</Button>
</form>

</div>

    )
}
export default Form