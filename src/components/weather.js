import React from 'react'

const Weather = (props) => {

        return(
<div>

{props.city &&


<div>
<p> Местонахождение {props.city} , {props.country}</p>
<p> Температура {props.temp} </p>
<p> Восход солнца {props.sunrise} </p>
<p> заход солнца {props.sunset} </p>
    </div>
    }
    <p>{props.error}</p>

</div>



        );
    }

 
export default Weather