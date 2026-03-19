import { useState } from "react"

export default function Commentsform() {

    let [formdata, setformdata] = useState({
        username:"",
        Remarks:"",
        rating:5,
        
    })

    let handleinputchange = (event) => {
        setformdata((currdata) => {
            return{...currdata,[event.target.name]:event.target.value}
        })
    }

    let handlesubmit = (event) => {
       event.preventDefault();
    }

    return (
        <div>
            <h3>Give a comment !</h3>
            <form onSubmit={handlesubmit}>
                <label htmlFor="username"> Username </label>
                <input 
                placeholder="username"
                 type="text"
                 value={formdata.username}
                 onChange={handleinputchange}
                 id="Username" 
                 name="username"/>
                <br /><br />
                
                <label htmlFor="Remarks">Remarks </label>
                <textarea
                placeholder="add few remarks"
                value={formdata.Remarks}
                onChange={handleinputchange}
                id="Remarks"
                name="Remark"
                > Remarks</textarea>
                <br /><br />

                <label htmlFor="rating">Rating </label>
                <input placeholder="rating" 
                type="number"
                value={formdata.rating}
                onChange={handleinputchange}
                id="rating"
                name="rating" />
                <br /><br />

                <button>Add comment</button>
            </form>
        </div>
    )
}