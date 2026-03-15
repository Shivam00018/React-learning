function PrintHello() {
    console.log("HELLO!");
}

function PrintBye() {
    console.log("BYE!!");
}

export default function Button() {
    return (
   <div>
   <button onClick={PrintHello}>Click me!</button>
   <p onMouseOver={PrintBye}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae cumque delectus, aspernatur soluta quos illum, doloribus voluptate similique assumenda dolores sit vero facere odio reprehenderit facilis iste sequi debitis cupiditate.</p>
   </div>
    );
}