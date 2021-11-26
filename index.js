// create a clear function for all values
const clearScreen = ()=>{
    document.getElementById('result').value='';
}



// create a function display value

const displayValue = (value)=>{

   document.getElementById('result').value +=value;
}

// summarize the result and return it

const calculate =()=>{

    const valueN = document.getElementById('result').value;

   const valueQ =eval(valueN);

    document.getElementById('result').value =valueQ;
}