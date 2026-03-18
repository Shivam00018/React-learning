import { useState } from "react"

export default function Forms() {
   let [Fullname, setFullname] = useState("Shivam");
   let [Username, setUsername] = useState("Shivam");

   let Handlenamechange  = (event) => {
    return(
        setFullname(event.target.value)
    )
   }

   let Handleuserchange  = (event) => {
    return(
        setusername(event.target.value)
    )
   }
    return(
        <form >
            <label htmlFor="Username"> Full Name </label>
            <input placeholder="Enter your name" type="text" value={Fullname} onChange={Handlenamechange} id="Username" />
            <button>submit</button>
            <br />
            <br />
            <label htmlFor="Username"> User Name </label>
            <input placeholder="Enter your name" type="text" value={Username} onChange={Handleuserchange} id="Username" />
            <button>submit</button>
            
        </form>    )
}