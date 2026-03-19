import { useState } from "react"

export default function Forms() {
  let [formdata, setformdata] = useState({
    Fullname:"",
    Username: ""
})

let handleinputchange = (event) => {
   let fieldName= event.target.name;
   let newvalue= event.target.value;

   setformdata((currdata)  => {
    currdata[fieldName] = newvalue;
    return{...currdata};
   }
)
};

 let handlesubmit = (event) => {
    event.preventDefault();
    setformdata({
        Fullname :"",
        Username :"",
    })
 }

  
    return(
        <form onSubmit={handlesubmit} >
            <label htmlFor="Username"> Full Name </label>
            <input placeholder="Enter your name" type="text" value={formdata.Fullname} onChange={handleinputchange} id="Username" name="Fullname" />
            <button>submit</button>
            <br />
            <br />
            <label htmlFor="Username"> User Name </label>
            <input placeholder="Enter your name" type="text" value={formdata.Username} onChange={handleinputchange} id="Username" name="Username" />
            <button>submit</button>
            
        </form>    )
}