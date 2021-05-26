import React from 'react';
import {useParams,useLocation,useHistory} from 'react-router-dom';
 const User =() =>{
     const {fname , lname} = useParams();
     const location = useLocation();
     const history = useHistory();
     console.log(location)

     return(
        

<h1><>
User Page {fname} {lname}
<p>My curren location is {location.pathname} </p>

{location.pathname===`/user/sedmo/jok`?(
<button onClick={()=>{
    history.push('/')
}}>Click me</button>) : null}
</></h1>

     );
 }
export default User;