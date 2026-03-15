function handleformsubmit(event){
    event.preventDefault();
    console.log("form was submit !")
}

export default function Form() {
    return(
        <form>
        <input placeholder="Write somthing" />
        <button onClick={handleformsubmit}>submit</button>
        </form>
    );
}