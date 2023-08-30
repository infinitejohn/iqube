function outerFunction() {
    const outerValue = "I'm from the outer function";
    
    function innerFunction() {
      console.log(outerValue); // Accessing outerValue from the enclosing function
    }
    
    return innerFunction;
  }
  
  const closure = outerFunction();
  closure(); // This will still have access to outerValue
  