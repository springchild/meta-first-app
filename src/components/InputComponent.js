function InputComponent() {
    const handler = () => console.log('fourth example')
    return ( 
       <div> 
         <button onClick = {handler} >
           Click Me!!!!!!!!!
         </button>
         <button onClick={ () => console.log('clicked') }> 
            Click here
        </button>
       </div>
       
    )
 }
 export default InputComponent;
  